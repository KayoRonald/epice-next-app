import React from 'react';
import {
  Box, Container, SimpleGrid, Stack, Heading,
  AvatarGroup, Text, Avatar, AvatarBadge, Image as Img, Flex,
} from '@chakra-ui/react';
import { palestrantes } from '../../data/palestrante';
import FormSubscription from './FormSubs';

export default function Form() {
  return (
    <Box id="contact" as="section" mb={20}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        pt={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={5}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontWeight='extrabold'
          >
            Faça sua inscrição
          </Heading>
          <Text>Encontro Picuiense de Computação e Eletrônica do IFPB</Text>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Img
              src="/img/svg/undraw_collaboration_re_vyau.svg"
              h="250px"
              textAlign={'center'}
            />
          </Flex>
          <Stack direction={'row'} spacing='1rem' align={'center'}>
            <AvatarGroup max={5}>
              {palestrantes.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.avatar}
                  size="lg"
                  position={'relative'}
                  borderColor="purple.500"
                  borderWidth={4}
                >
                  <AvatarBadge boxSize='22px' bg='green.500' />
                </Avatar>
              ))}
            </AvatarGroup>
          </Stack>
        </Stack>
        <FormSubscription />
      </Container>
    </Box>
  )
}