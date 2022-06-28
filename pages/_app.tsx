import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>Shop On </title>
        <meta name='description' content='My next shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    <Layout>

      <Component {...pageProps} />
    </Layout>
      {/* <Footer /> */}
    </>
  )
}

export default MyApp
