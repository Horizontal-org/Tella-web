import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Md3DRotation } from '@react-icons/all-files/md/Md3DRotation'
import { NavButton } from '../components/NavButton/NavButton'

export const Home: FunctionComponent = () => (
  <>
    <Head>
      <title>Tella Web</title>
    </Head>
    <div className="max-w-xs p-4">
      <NavButton text="Hi!" icon={<Md3DRotation />} selected />
    </div>
  </>
)

export default Home
