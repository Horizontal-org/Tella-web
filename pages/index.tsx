import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Button } from '../components/Button/Button'

export const Home: FunctionComponent = () => (
  <>
    <Head>
      <title>Tella Web</title>
    </Head>
    <Button>Hi!</Button>
  </>
)

export default Home
