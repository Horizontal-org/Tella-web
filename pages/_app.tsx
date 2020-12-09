import { AppProps } from 'next/app'

import '../styles/globals.scss'
import 'fontsource-lato'

import { FunctionComponent } from 'react'

const TellaWeb: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default TellaWeb
