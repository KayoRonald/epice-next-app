import React from 'react'
import {
 useColorModeValue, Input as ChakraInput, InputGroup, InputLeftElement, InputRightElement
} from '@chakra-ui/react';
import { InputProps } from "@/utils/types";
import { BiErrorAlt } from 'react-icons/bi'

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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