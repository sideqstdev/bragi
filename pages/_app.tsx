import '../src/styles/globals.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from '../src/theme/theme.provider'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
