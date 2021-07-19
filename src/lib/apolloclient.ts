import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { devMode } from "./constants";
import { useMemo } from "react";

const apolloLink = (token: string) => {
  return createHttpLink({
    uri: devMode ? `http://localhost:8080` : ``,
    credentials: `include`,
    headers: {
      Authorization: token ? `Bearer ${token}` : `No Token`,
    },
  });
};

export const apolloClient = (token: string) => {
  return new ApolloClient({
    ssrMode: false,
    link: apolloLink(token),
    cache: new InMemoryCache(),
  });
};

export const useApollo = (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  token: string
) => {
  const client = useMemo(() => {
    return {
      apolloClient,
      token,
    };
  }, [token]);
  return {
    client,
  };
};
