import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import NextLink from "next/link"
import { FaHome } from 'react-icons/fa'
import { VStack, Stack, Button, Heading, Text, Center, Img as Image, Box, Flex } from '@chakra-ui/react'
import MotionBox from '@/components/MotionBox'

const PageNotFound: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/img/logo.png" />
        <title>404 | Tudo na vida tem um limite...</title>
      </Head>
      <Flex flexDirection="column" minHeight="100vh" width="full" align="center" justifyContent="center">
        <Box
          px={4}
          width="94%"
          maxWidth="900px"
          borderRadius="sm"
          textAlign="center"
          mt={10}
        >
          <Box p={4}>
            <MotionBox
              width={["100%", "70%", "60%", "60%"]}
              margin="0 auto"
              animate={{ y: 20 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            >
              <Center>
                <Image
                  w="full"
                  rounded="lg"
                  maxW="400px"
                  loading="lazy"
                  src="/img/svg/undraw_warning_cyit.svg"
                  alt="Página não encontrada"
                />
              </Center>
            </MotionBox>
            <VStack justify="center" spacing="4" textAlign="center" as="article" mt={5}>
              <Heading fontSize="3xl">404 | Página não disponível</Heading>
              <Text fontSize={{ md: "xl" }}>
                Ops! Parece que você seguiu um link incorreto. Se você acha que isso é um problema para nós, diga-nos
              </Text>
              <Box textAlign="center">
                <NextLink href="/" passHref>
                  <Button backgroundColor="buttonBackground" leftIcon={<FaHome />}>
                    Voltar à tela inicial
                  </Button>
                </NextLink>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default PageNotFound;