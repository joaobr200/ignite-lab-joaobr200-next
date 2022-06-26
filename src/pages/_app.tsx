import "../styles/global.css";
import type { AppProps } from "next/app";
import { MenuContextProvider } from "../context/MenuContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </MenuContextProvider>
  );
}

export default MyApp;
