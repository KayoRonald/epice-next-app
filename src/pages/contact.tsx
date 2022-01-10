import React from 'react';
import emailjs from 'emailjs-com';
import {
  Flex,
  Box, FormControl, FormLabel,
  Textarea, Button, useColorModeValue, useToast
} from '@chakra-ui/react';
import Head from 'next/head'
import {
  AiOutlineUserDelete,
  AiOutlineMail,
  AiFillFileText,
} from 'react-icons/ai';
import axios from 'axios'
import { Input, FormHeader } from '../components/';
const Contact: React.FC = () => {
  const toast = useToast()
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    const data = {
      name,
      email,
      subject,
      message
    };
    if (name !== '' && email !== '' && subject !== '') {
      try {
        setLoading(true)
        await axios.post('/api/contact', data)
        toast({
          title: 'Enviado com sucesso!.',
          description: "Aguarde alguns dias para que possamos lhe ajudar.",
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
    <React.Fragment key="key">
      <Head>
        <title>EPICE | Contato</title>
      </Head>
      <Flex
        id="anime"
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
        mt={10}
      >
        <Box
          as="form"
          onSubmit={handleSubmit}
          backgroundColor={useColorModeValue('#d0d8dd', '#0e0e10')}
          px={4}
          width="94%"
          maxWidth="500px"
          borderRadius="sm"
          textAlign="center"
        >
          <Box p={4}>
            <FormHeader
              heading="Contato"
              text="Detalhe o seu problema"
            />
            <Box my={8} textAlign="left">
              <FormControl id="nome">
                <FormLabel>Nome:</FormLabel>
                <Input
                  type="text"
                  placeholder="Insira o seu nome"
                  name="name"
                  iconLeft={<AiOutlineUserDelete />}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" mt={2}>
                <FormLabel>Email:</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Insira o seu endereço de email"
                  iconLeft={<AiOutlineMail />}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="descricao" mt={2}>
                <FormLabel>Descrição:</FormLabel>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Insira a sua descrição"
                  iconLeft={<AiFillFileText />}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </FormControl>
              <FormControl id="text" mt={2}>
                <FormLabel>Texto:</FormLabel>
                <Textarea
                  placeholder="Coloque o seu texto aqui"
                  name="message"
                  required
                  focusBorderColor="purple.500"
                  backgroundColor={useColorModeValue("white", "gray.800")}
                  border={0}
                  color={useColorModeValue("#18216d", "white")}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
              <ButtonSend />
            </Box>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
};
const ButtonSend = () => {
  return (
    <Button
      type="submit"
      width="full"
      mt={4}
      outline="none"
      _hover={{ backgroundColor: 'purple.600' }}
      backgroundColor="purple.500"
    >
      Enviar
    </Button>
  );
};

export default Contact;