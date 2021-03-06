import '../styles/globals.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/octocat.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}