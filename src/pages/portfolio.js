import Head from 'next/head';
import { Portfolio } from '../components/Portfolio'

export default function portfolio() {
  return (
    <>
      <Portfolio/>
      <Head>
        <title>Portfolio • Miles Butler</title>
        <meta property="og:title" content="Portfolio • Miles Butler" key="title" />
      </Head>
    </>
  )
}
