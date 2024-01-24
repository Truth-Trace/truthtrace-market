import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="2b5c5faffaf92b6c41dea2dbb014c753"
      activeChain={activeChain}
      supportedWallets={[
        embeddedWallet()
      ]}
    >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
