/* eslint-disable */
import React from 'react'
import {
  Box, Stack, Heading, Button,
  useColorModeValue, useToast, Select, FormLabel, FormControl,
  FormErrorMessage, Input as ChakraInput, InputGroup, InputLeftElement, InputRightElement
} from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineUserAdd, AiOutlineMail } from 'react-icons/ai'
import { BiErrorAlt } from 'react-icons/bi'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { InputProps } from "../../../utils/types";
import * as yup from "yup";
import { ContainerInput } from '../../../components/';
import axios from 'axios';
type FormValues = {
  name: string;
  email: string;
  curso: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Esse campo é obrigatório."),
  email: yup.string().email("Email inválido.").required("Esse campo é obrigatório."),
  curso: yup.string().required("Esse campo é obrigatório."),
})

export default function FormSubscription() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const toast = useToast()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });
  async function onSubmitHandler<FormValues>(data: FormValues): Promise<void> {
    try {
      setLoading(true)
      await axios.post('/api/subscription', data)
      toast({
        title: 'Cadastrado com sucesso.',
        description: "Aguarde alguns dias para realização do evento.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error: any) {
      let message: string = error.response.data.message   
      console.log(message)
      toast({
        title: 'Não foi possível cadastrar.',
        description: message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  };

  return (
    <Stack
      bg={useColorModeValue('#d0d8dd', '#000')}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      width="94%"
      maxWidth="700px"
    >
      <Heading color={useColorModeValue("#18216d", "white")}>Inscrição</Heading>
      <Box as="form" mt={10} onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing={4}>
          <FormControl isInvalid={errors.name ? true : false}>
            <ContainerInput
              txt="Coloque seu Nome Completo"
            >

              <Input
                placeholder="Ex: João Nobrega"
                type="text"
                {...register('name')}
                iconLeft={<AiOutlineUserAdd />}
                isError={errors.name ? true : false}
              />
            </ContainerInput>
            <FormErrorMessage>
              {errors.name?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email ? true : false}>
            <ContainerInput
              txt="Coloque seu Email"
            >
              <Input
                placeholder="Ex: exemplo@gmail.com"
                type="text"
                {...register('email')}
                isError={errors.email ? true : false}
                iconLeft={<AiOutlineMail />}
              />
            </ContainerInput>
            <FormErrorMessage>
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.curso ? true : false}>
            <FormLabel
              color={useColorModeValue("#18216d", "white")}
            >
              Escolha o Curso que você faz
            </FormLabel>
            <Select
              placeholder="Ex: INFO, Eletrônica, Visitante..."
              {...register("curso")}
              backgroundColor={useColorModeValue("white", "gray.800")}
            >
              <option value="INFO">INFO</option>
              <option value="Eletrônica">Eletrônica</option>
              <option value="Visitante">Visitante</option>
            </Select>
            <FormErrorMessage>
              {errors.curso?.message}
            </FormErrorMessage>
          </FormControl>
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
  )
}
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputGroup>
      <InputLeftElement
        width="3rem"
        height="100%"
        children={props.iconLeft}
        color={useColorModeValue("#18216d", "purple.500")}
      />
      <ChakraInput
        ref={ref}
        type={props.type}
        focusBorderColor="purple.500"
        backgroundColor={useColorModeValue("white", "gray.800")}
        border={0}
        color={useColorModeValue("#18216d", "white")}
        _placeholder={{
          color: useColorModeValue("black", "white"),
        }}
        {...props}
      />
      {props.isError ? (
        <InputRightElement children={<BiErrorAlt color='red'/>} />
        ):(
        <React.Fragment/ >
      )}
    </InputGroup>
  )
})
// const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
//   <ChakraInput BiErrorAlt
//     ref={ref}
//     type={props.type}
//     focusBorderColor="purple.500"
//     backgroundColor={useColorModeValue("white", "gray.800")}
//     border={0}
//     color={useColorModeValue("#18216d", "white")}
//     _placeholder={{
//       color: useColorModeValue("black", "white"),
//     }}
//     {...props}
//   />
// ));