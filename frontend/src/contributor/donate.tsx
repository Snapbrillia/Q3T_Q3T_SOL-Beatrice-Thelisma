import React, { useEffect, useMemo, useRef, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import "./donate.css";
import WalletConnectButton from "./connectWalletButton";
import initialize from "./utils/initialize";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

class WalletAdapterAnchor {
  walletAdapter: any;
  constructor(walletAdapter: any) {
    this.walletAdapter = walletAdapter;
  }

  get publicKey() {
    return this.walletAdapter.publicKey;
  }

  signTransaction(transaction: any) {
    return this.walletAdapter.signTransaction(transaction);
  }

  signAllTransactions(transactions: any) {
    return this.walletAdapter.signAllTransactions(transactions);
  }
}

export default function Donate() {
  const [activeNum, setActiveNum] = useState(0);
  const network = WalletAdapterNetwork.Devnet;
  // Set the endpoint (RPC connection) to Solana
  const { wallet, publicKey, signTransaction, signAllTransactions } =
    useWallet(); // Use wallet adapter
  console.log(publicKey?.toBase58());
  const endpoint = useMemo(
    () => clusterApiUrl(WalletAdapterNetwork.Devnet),
    []
  );
  const connection = useMemo(() => new Connection(endpoint), [endpoint]);

  const adaptedWallet = useMemo(() => {
    if (!wallet || !publicKey) return null;
    return new WalletAdapterAnchor({
      publicKey,
      signTransaction,
      signAllTransactions,
    });
  }, [wallet, publicKey, signTransaction, signAllTransactions]);

  // Create the AnchorProvider
  const provider = useMemo(() => {
    if (!adaptedWallet) return null;
    return new anchor.AnchorProvider(
      connection,
      adaptedWallet,
      anchor.AnchorProvider.defaultOptions()
    );
  }, [connection, adaptedWallet]);

  if (provider) {
    anchor.setProvider(provider);
    console.log("Provider set with wallet", adaptedWallet);
  }

  useEffect(() => {
    if (publicKey) {
      const id = initialize(publicKey, provider);
      console.log(id);
    }
  }, [publicKey, provider]);

  const items = [
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86d24240ca6b1df611e98ed6bd7a1efc&auto=format&fit=crop&w=1400&q=80",
      mainTitle: "Help Us!",
      description: "You know what to do. We know you know.",
      content:
        "Why not help us build those super warm fortresses for our little friends!? Winter is coming and they need that money to buy that wood, insulation and tools.",
    },
    {
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1681140560925-a50f402b8525?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainTitle: "Help New!",
      description: "You know what to do. We know you know. nEW",
      content:
        "Why not help us build those super warm fortresses for our little friends!? Winter is coming and they need that money to buy that wood, insulation and tools.",
    },
  ];

  return (
    <div className="body">
      <WalletConnectButton />
      <div id="app" className="donate-funding">
        <div>
          <div className="donate-funding__header">
            <div className="donate-funding__header__description">
              <h1>HELP!</h1>
              <p>
                Spark, Flash and Buddy want to sleep in a comfy dog house this
                winter.
              </p>
              <div className="hashtags">
                #puppy #donatefunding #winter #dogs #help
              </div>
            </div>

            <div className="donate-funding__header__details">
              <h1>25</h1>
              <p className="days-to-go">days to go</p>
              <div className="funding-counter">
                <p>
                  <strong>$400 / $1000 raised</strong>
                </p>
                <div className="funding-counter__bar"></div>
              </div>
            </div>
          </div>
          <div className="donate-funding__main" key={activeNum}>
            <div className="donate-funding__main__col col1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="#85365f"
              >
                <path d="M 26.978516 3.0214844 C 26.978516 3.0214844 18 3 11 10 C 10.676811 10.323189 10.395406 10.675024 10.140625 11.039062 C 8.8995439 10.939831 6.9997651 10.972248 6.0273438 11.945312 C 3.7573437 14.215312 3 18 3 18 L 8 17.285156 L 8 19 L 11 22 L 12.714844 22 L 12 27 C 12 27 15.784688 26.242656 18.054688 23.972656 C 19.027752 23.000235 19.060169 21.100456 18.960938 19.859375 C 19.324976 19.604594 19.676811 19.323189 20 19 C 27 12 26.978516 3.0214844 26.978516 3.0214844 z M 19 9 C 20.105 9 21 9.895 21 11 C 21 12.105 20.105 13 19 13 C 17.895 13 17 12.105 17 11 C 17 9.895 17.895 9 19 9 z M 7.1992188 19.996094 C 6.8192188 20.096094 6.4591094 20.286984 6.1621094 20.583984 C 4.7961094 21.949984 5.0136719 24.984375 5.0136719 24.984375 C 5.0136719 24.984375 8.0281094 25.219938 9.4121094 23.835938 C 9.7091094 23.538937 9.9 23.176875 10 22.796875 L 9.5429688 22.339844 C 9.4979688 22.403844 9.4701094 22.478156 9.4121094 22.535156 C 8.4371094 23.510156 6.9746094 23.023438 6.9746094 23.023438 C 6.9746094 23.023438 6.4868906 21.560938 7.4628906 20.585938 C 7.5208906 20.527938 7.59225 20.501078 7.65625 20.455078 L 7.1992188 19.996094 z"></path>
              </svg>
              <h4>{items[activeNum].mainTitle}</h4>
              <span className="content">{items[activeNum].description}</span>
              <span className="content">{items[activeNum].content}</span>
              <div className="button">
                <strong>
                  <small>donate now</small>
                </strong>
              </div>
            </div>

            <div className="donate-funding__main__col col2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="#85365f"
              >
                <path d="M 6.5292969 2.515625 A 1 1 0 0 0 5.8085938 2.8085938 A 1 1 0 0 0 5.8085938 4.2226562 A 1 1 0 0 0 7.2226562 4.2226562 A 1 1 0 0 0 7.2226562 2.8085938 A 1 1 0 0 0 6.5292969 2.515625 z M 23.5 2.515625 A 1 1 0 0 0 22.777344 2.8085938 A 1 1 0 0 0 22.777344 4.2226562 A 1 1 0 0 0 24.191406 4.2226562 A 1 1 0 0 0 24.191406 2.8085938 A 1 1 0 0 0 23.5 2.515625 z M 15 3 C 10.029 3 6 7.029 6 12 C 6 17 10 19 12 23 L 18 23 C 20 19 24 17 24 12 C 24 7.029 19.971 3 15 3 z M 15 6 L 15 11 L 19 11 L 15 18 L 15 13 L 11 13 L 15 6 z M 3 11 A 1 1 0 0 0 2 12 A 1 1 0 0 0 3 13 A 1 1 0 0 0 4 12 A 1 1 0 0 0 3 11 z M 27 11 A 1 1 0 0 0 26 12 A 1 1 0 0 0 27 13 A 1 1 0 0 0 28 12 A 1 1 0 0 0 27 11 z M 6.5292969 19.484375 A 1 1 0 0 0 5.8066406 19.777344 A 1 1 0 0 0 5.8066406 21.191406 A 1 1 0 0 0 7.2226562 21.191406 A 1 1 0 0 0 7.2226562 19.777344 A 1 1 0 0 0 6.5292969 19.484375 z M 23.498047 19.486328 A 1 1 0 0 0 22.777344 19.777344 A 1 1 0 0 0 22.777344 21.193359 A 1 1 0 0 0 24.191406 21.193359 A 1 1 0 0 0 24.191406 19.777344 A 1 1 0 0 0 23.498047 19.486328 z M 12 25 L 12 26 C 12 27.105 12.895 28 14 28 A 1 1 0 0 0 15 29 A 1 1 0 0 0 16 28 C 17.105 28 18 27.105 18 26 L 18 25 L 12 25 z"></path>
              </svg>
              <h4>
                Why should you care? Who knows. But here's a list to help you
                decide:
              </h4>
              <ul>
                <li className="list-content">
                  Why should you care? Who knows.
                </li>
                <li className="list-content">
                  Why should you care? Who knows.
                </li>
                <li className="list-content">
                  Why should you care? Who knows.
                </li>
                <li className="list-content">
                  Why should you care? Who knows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
