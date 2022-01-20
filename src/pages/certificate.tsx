/* eslint-disable */
import React from 'react'
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  useColorModeValue,
  Container,
  SimpleGrid,
  Box,
  Img
} from '@chakra-ui/react';
const Certificate = () => {
  return (
    <React.Fragment>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        pt={{ base: 10, sm: 20, lg: 32 }}
        minH={'100vh'}
        py={12}
      >
        <Stack spacing={5}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontWeight='extrabold'
          >
            Epice
          </Heading>
          <Text>Encontro Picuiense de Computação e Eletrônica do IFPB</Text>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Img
              src="https://raw.githubusercontent.com/taffarel55/taffarel55/master/assets/certificate.svg"
              h="250px"
              textAlign={'center'}
            />
          </Flex>
        </Stack>
        <Stack
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          width="94%"
          maxWidth="700px"
        >
          <Box>
            <Stack
              boxShadow={'2xl'}
              bg={useColorModeValue('white', 'gray.700')}
              rounded={'xl'}
              p={10}
              spacing={8}
              align={'center'}
              as="form" mt={10} height={'fit-content'}
            >
              <Stack align={'center'} spacing={2}>
                <Heading
                  textTransform={'uppercase'}
                  fontSize={'3xl'}
                  color={useColorModeValue('gray.800', 'gray.200')}>
                  Gere seu certificado
                </Heading>
                <Text fontSize={'lg'} color={'gray.500'}>
                  Informe o email utilizado na inscrição:
                </Text>
              </Stack>
              <Stack spacing={4} direction={'column'} w={'full'}>
                <Input
                  type={'text'}
                  placeholder={'john@doe.net'}
                  color={useColorModeValue('gray.800', 'gray.200')}
                  bg={useColorModeValue('gray.100', 'gray.600')}
                  rounded={'full'}
                  border={0}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    outline: 'none',
                  }}
                />
                <Button
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  flex={'1 0 auto'}
                  _hover={{ bg: 'blue.500' }}
                  _focus={{ bg: 'blue.500' }}>
                  Gerar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  )
};

// const pdf = () => {
//   return (
//     <>
//       <PDFViewer width="100%" height="800px">
//         <CertPDF user={user} />
//       </PDFViewer>
//     </Container>
// </>
//   )
// }


export default Certificate;