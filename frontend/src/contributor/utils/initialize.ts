import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";

import { Capstone } from "./capstone.ts";
import IDL from "./capstone.json";

export default function initialize(connectedPublicKey: any, provider : any) {
  // const provider = anchor.AnchorProvider.env();
  // anchor.setProvider(provider);

  const programId = new anchor.web3.PublicKey("EkbQCghnbRZ5DtQcFEZpYCzT96ngfpJMoqyfjP4F8qNd"); // Replace with your actual program ID
  const program = new Program<Capstone>(IDL, programId, provider);

  const fundraiser = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("fundraiser"), connectedPublicKey.toBuffer()],
    program.programId
  )[0];

  const contributor = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("contributor"),
      fundraiser.toBuffer(),
      provider.publicKey.toBuffer(),
    ],
    program.programId
  )[0];

  const confirm = async (signature: string): Promise<string> => {
    const block = await provider.connection.getLatestBlockhash();
    await provider.connection.confirmTransaction({
      signature,
      ...block,
    });
    return signature;
  };

  return confirm;
}
