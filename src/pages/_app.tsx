import "../styles/global.css";
import type { AppProps } from "next/app";
import { MenuContextProvider } from "../context/MenuContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MenuContextProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </MenuContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
