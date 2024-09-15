import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import IDL from "./capstone.json";
import { Buffer } from "buffer";
import VaultWallet from './vault.json'


export default async function initialize(
    connectedPublicKey: PublicKey,
    provider: any,
    baseAccount: any,
) {

    const generate = JSON.stringify(IDL);
    const b = JSON.parse(generate);
    const program = new Program(b, provider);

    const fundraiser = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from("fundraiser"), baseAccount.publicKey.toBuffer()],
        program.programId
    )[0];

    const contributor = PublicKey.findProgramAddressSync(
        [
            Buffer.from("contributor"),
            fundraiser.toBuffer(),
            provider.wallet.publicKey.toBuffer(), // Ensure this is correct
        ],
        program.programId
    )[0];

    const vaultKeypair = anchor.web3.Keypair.fromSecretKey(new Uint8Array(VaultWallet));

    const confirm = async (signature: string): Promise<string> => {
        const block = await provider.connection.getLatestBlockhash();
        await provider.connection.confirmTransaction({
            signature,
            ...block,
        });
        console.log(signature);
        return signature;
    };

    const contribute = async () => {
        const lamportsToContribute = anchor.web3.LAMPORTS_PER_SOL * 0.5;

        // Generate the instruction with accountsPartial
        const contributeInstruction = await program.methods
            .contribute(new anchor.BN(lamportsToContribute))
            .accountsPartial({
                contributor: provider.wallet.publicKey, // Wallet public key as the contributor
                fundraiser: fundraiser, // Predefined fundraiser account
                vault: vaultKeypair.publicKey, // The public key of the vault
                contributor_account: contributor, // The contributor's account
                systemProgram: anchor.web3.SystemProgram.programId, // System Program ID
            })
            .instruction(); // Generate the instruction

        // Create the transaction and add the instruction
        const transaction = new anchor.web3.Transaction().add(contributeInstruction);

        // Get the latest blockhash and set the transaction details
        const { blockhash } = await provider.connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = provider.wallet.publicKey;

        try {
            // Ask the provider to send and confirm the transaction
            const signature = await provider.sendAndConfirm(transaction).the(confirm);
            console.log("Transaction sent with signature:", signature);
            return signature;
        } catch (error) {
            console.error("Error sending transaction:", error);
        }
    };


    return contribute();
}
