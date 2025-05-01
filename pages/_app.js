import Head from 'next/head'
import '../styles/globals.scss'
import Header from '../components/header'
import Container from "react-bootstrap/Container"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Container className="mt-6">
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  )
}

export default MyApp
