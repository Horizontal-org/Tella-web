import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import { FunctionComponent } from 'react'

const TellaWeb: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default TellaWeb
