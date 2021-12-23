import React from 'react'
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import { InputProps } from "../../types";
const Input = ({ name, txt, placeholder, onChange, type,children }: InputProps) => {
  return (
    <FormControl>
      <FormLabel color={useColorModeValue("#18216d", "white")}>{txt}</FormLabel>
      <InputGroup>
        <InputLeftElement
          width="3rem"
          height="100%"
          children={children}
          color={useColorModeValue("#18216d", "purple.500")}
        />
        <ChakraInput
          required
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          focusBorderColor="purple.500"
          backgroundColor={useColorModeValue("white", "gray.800")}
          border={0}
          color={useColorModeValue("#18216d", "white")}
          _placeholder={{
            color: useColorModeValue("black", "white"),
          }}
        />
      </InputGroup>
    </FormControl>
  )
};

export default Input