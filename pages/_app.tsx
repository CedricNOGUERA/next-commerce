import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Head from 'next/head';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>Next Shop</title>
        <meta name='description' content='My next shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
