import "../styles/globals.css";
import { RobinhoodProvider } from "../context/RobinhoodContext";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl="https://cpvfl4x340yu.usemoralis.com:2053/server"
      appId="slhqcGGRZ4VlvaQtUNwaYrQo2IULRsLXzkOtPlWZ"
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
