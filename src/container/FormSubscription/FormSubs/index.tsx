/* eslint-disable */
import React from 'react'
import {
  Box, Stack, Heading, Button,
  useColorModeValue, useToast, Select, FormLabel, FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineUserAdd, AiOutlineMail } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { ContainerInput } from 'src/components/';
import axios from 'src/api/';
import { Input } from '@/components/Input';
import { schema } from 'src/schema/';
import { FormValues } from '@/utils/types';

export default function FormSubscription() {
  const courses = [
    'Edificações', 'INFO', 'Geologia', 'Mineração', 'Visitante'
  ]
  const [loading, setLoading] = React.useState<boolean>(false);
  const toast = useToast()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });
  async function onSubmitHandler<FormValues>(data: FormValues): Promise<void> {
    try {
      setLoading(true)
      const res = await axios.post('/v1/epice', data)
      console.log(res)
      toast({
        title: 'Cadastrado com sucesso.',
        description: "Aguarde alguns dias para realização do evento.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error: any) {
      console.log(error)
      toast({
        title: 'Não foi possível cadastrar.',
        description: error.response.data.message,
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
          <FormControl isInvalid={!!errors.name}>
            <ContainerInput
              txt="Coloque seu Nome Completo"
            >
              <Input
                placeholder="Ex: João Nobrega"
                type="text"
                {...register('name')}
                iconleft={<AiOutlineUserAdd />}
                iserror={errors.name ? true : undefined}
              />
            </ContainerInput>
            <FormErrorMessage>
              {errors.name?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <ContainerInput
              txt="Coloque seu Email"
            >
              <Input
                placeholder="Ex: exemplo@gmail.com"
                type="text"
                {...register('email')}
                iserror={errors.email ? true : undefined}
                iconleft={<AiOutlineMail />}
              />
            </ContainerInput>
            <FormErrorMessage>
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.curso}>
            <FormLabel
              color={useColorModeValue("#18216d", "white")}
            >
              Escolha o Curso que você faz
            </FormLabel>
            <Select
              placeholder="Ex: Informática, Eletrônica, Visitante..."
              {...register("curso")}
              backgroundColor={useColorModeValue("white", "gray.800")}
            >
              {courses.map((courses, index: number) =>{
                return <option value={courses} key={index+1}>{courses}</option>
              })}
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