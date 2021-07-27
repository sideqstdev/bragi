import "../src/styles/globals.css";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient, useApollo } from "../src/lib/apolloclient";
import { ThemeProvider } from "../src/theme/theme.provider";
import ErrorToastManager from "../src/components/managers/ErrorToastManager";
import AuthManager from "../src/components/managers/AuthManager";
import { isServer } from "../src/lib/util/is-server";
import { useLoggedInStore } from "../src/stores/storeLogin";
import { IconContext } from "react-icons";

function App({ Component, pageProps }: AppProps) {
  let token: string;
  const { accessToken } = useLoggedInStore();
  if (!isServer) {
    token = accessToken || ``;
  }
  const { client } = useApollo(apolloClient(token), token);
  return (
    <ApolloProvider client={client.apolloClient}>
      <ThemeProvider>
        <IconContext.Provider value={{}}>
          <AuthManager />
          <Component {...pageProps} />
          <ErrorToastManager />
        </IconContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
