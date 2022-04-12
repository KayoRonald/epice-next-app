/* eslint-disable */
import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Heading, Container, Text, useColorModeValue, Flex, ListItem, List, Avatar, Divider } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'
import { initializeApollo } from '@/utils/apollo'
import { GET_FEATURES } from '../graphql/getFeatures'
import { PropsQl } from '@/utils/types'


export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_FEATURES })

  return {
    props: {
      data: data.features,
      initialApolloState: apolloClient.cache.extract(),
    }
  }
}
const Changelog = ({ data }: PropsQl) => {
  return (
    <React.Fragment>
      <Head>
        <title>Acompanhe os Logs do site</title>
      </Head>
      <Container mt={24} mb={3} minHeight="100vh" maxW="180ch">
        {data.map((data: PropsQl) => {
          return (
            <Flex flexDir="column" alignItems="center" paddingX={10} paddingY={5} padding={0}>
              <Box width="99%" >
                <Flex flexDir="column" mt={10} >
                  <List>
                    <ListItem mb={4} >
                      <Box bg="purple.500" padding={10} rounded="lg" >
                        <Flex alignItems="center" >
                          <Avatar size="lg" name={data.updatedBy.name} mt={5} src={data.updatedBy.picture} />
                          <Box>
                            <Heading fontSize="2xl" ml={2}>{data.updatedBy.name}</Heading>
                          </Box>
                        </Flex>
                        <Divider mt={2} />
                        <Box
                          as="dt"
                          fontSize="lg"
                          lineHeight="6"
                          fontWeight="medium"
                          color="gray.900"
                        >
                          <Heading color={useColorModeValue("#18216d", "white")}>
                            {data.title}
                          </Heading>
                        </Box>
                        <Text color="white" fontSize="auto" fontWeight={400}
                          dangerouslySetInnerHTML={{
                            __html: data.content
                          }}
                        />
                      </Box>
                    </ListItem>
                  </List>
                </Flex>
              </Box>
            </Flex>
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default Changelog;