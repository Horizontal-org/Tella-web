import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'

// Global style and fonts
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/700.css'
import '../styles/globals.css'

const TellaWeb: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default TellaWeb
