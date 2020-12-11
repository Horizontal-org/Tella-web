import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'

// Global style and fonts
import 'fontsource-open-sans/700-normal.css'
import 'fontsource-lato'
import '../styles/globals.css'

const TellaWeb: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default TellaWeb
