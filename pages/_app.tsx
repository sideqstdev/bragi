import '../src/styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client/react'
import {apolloClient} from '../src/lib/apolloclient'
import { ThemeProvider } from '../src/theme/theme.provider'
import ErrorToastManager from '../src/components/managers/ErrorToastManager'
import { CookiesProvider } from 'react-cookie'
import AuthManager from '../src/components/managers/AuthManager'

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <CookiesProvider>
          <AuthManager/>
          <Component {...pageProps} />
          <ErrorToastManager/>
        </CookiesProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
