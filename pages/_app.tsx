import '../src/styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client/react'
import {apolloClient} from '../src/lib/apolloclient'
import { ThemeProvider } from '../src/theme/theme.provider'
import ErrorToastManager from '../src/components/managers/ErrorToastManager'

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <Component {...pageProps} />
        <ErrorToastManager/>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
