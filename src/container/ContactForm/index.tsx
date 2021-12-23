import React from 'react';
import {
  Box, Container, SimpleGrid, Stack, Heading,
  AvatarGroup, Text, Avatar, Button, AvatarBadge,
  useColorModeValue, Image as Img, Flex, useToast
} from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineUserAdd, AiOutlineMail } from 'react-icons/ai'
import { IoMdSchool } from 'react-icons/io'
import { Slide, Fade } from "react-awesome-reveal";
import Input from '../../components/Input';
import { palestrantes } from '../../data/palestrante';
import api from '../../api';

export default function Form() {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [curso, setCurso] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const toast = useToast()

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    const data = {
      name,
      email,
      curso,
    };
    console.log(data)
    if (name !== '' && email !== '' && curso !== '') {
      try {
        setLoading(true)
        await api.post('epiceDb/', data)
        toast({
          title: 'Cadastrado com sucesso. 🥳',
          description: "Aguarde alguns dias para realização do evento.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } catch (error: any) {
        toast({
          title: 'Não foi possível cadastrar.',
          description: error.message || error,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } finally {
        setLoading(false)
      }
    } else {
      toast({
        title: 'Não foi possível cadastrar.',
        description: "Certifique-se de que todos os campos estejam preenchidos.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }
  return (
    <Box id="contact" as="section">
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        pt={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={5}>
          <Slide direction="left">
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
              <Fade>
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
              </Fade>
            </Stack>
          </Slide>
        </Stack>
        <Slide direction="right">
          <Stack
            bg={useColorModeValue('#d0d8dd', '#000')}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            width="94%"
            maxWidth="700px"
          >
            <Heading color={useColorModeValue("#18216d", "white")}>Inscrição</Heading>
            <Box as="form" mt={10} onSubmit={handleSubmit} method="POST">
              <Stack spacing={4}>
                <Box>
                  <Input
                    placeholder="Ex: João Nobrega"
                    txt="Nome completo"
                    name="name"
                    children={<AiOutlineUserAdd />}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box>
                  <Input
                    placeholder="Ex: exemplo@gmail.com"
                    txt="Coloque seu Email"
                    name="email"
                    children={<AiOutlineMail />}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
                <Box>
                  <Input
                    placeholder="Ex: INFO, Eletrônica, Visitante..."
                    txt="Nome do curso"
                    name="course"
                    children={<IoMdSchool />}
                    onChange={(e) => setCurso(e.target.value)}
                  />
                </Box>
                <Button
                  type="submit"
                  width="full"
                  mt={4}
                  outline="none"
                  _hover={{ backgroundColor: 'purple.600' }}
                  backgroundColor="purple.500"
                  leftIcon={<AiOutlineSend />}
                  isLoading={loading}
                  loadingText='Submitting'
                >
                  Realizar inscrição
                </Button>
              </Stack>
            </Box>
          </Stack>
          <div className='icon-scroll' />
        </Slide>
      </Container>
    </Box>
  )
}