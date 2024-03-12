import Head from 'next/head';
import { Home } from '../components/Home'

export default function home() {
  return (
    <>
      <Home/>
      <Head>
        <title>Miles Butler</title>
        <meta property="og:title" content="Miles Butler" key="title" />
      </Head>
    </>
  )
}
