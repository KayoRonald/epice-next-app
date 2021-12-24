import type { NextPage } from 'next'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Chakra } from '../theme/'
import { Styles } from '../styles/styles'
import { NavBar } from '../components/'
import { Footer } from '../container/'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Styles />
      <Footer />
    </Chakra >
  )
}

export { getServerSideProps } from "../theme";

export default MyApp