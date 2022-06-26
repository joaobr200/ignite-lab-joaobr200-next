import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.NEXT_PUBLIC_API_URI,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
  cache: new InMemoryCache(),
});
