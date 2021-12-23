import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Chakra } from '../theme/'
import { Styles } from '../styles/styles'
import { NavBar } from '../components/'
import { Footer } from '../container/'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <NavBar />
      <Component {...pageProps} />
      <Styles />
      <Footer />
    </Chakra >
  )
}

export { getServerSideProps } from "../theme";

export default MyApp