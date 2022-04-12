import type { NextPage } from 'next'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Chakra } from '../theme/'
import { Styles } from '../styles/styles'
import { NavBar } from '../components/'
import { Footer } from '@/container/index'
import { useApollo } from '@/utils/apollo'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export { getServerSideProps } from "../theme";

export default MyApp