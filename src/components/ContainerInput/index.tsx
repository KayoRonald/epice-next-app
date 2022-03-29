import React from 'react'
import {
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

type PropsBox = {
  txt: string;
  iconInput?: React.ReactNode;
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
  isError?: boolean;
}

const ContainerInput = ({ txt, iconInput, children }: PropsBox) => {
  return (
    <React.Fragment>
      <FormLabel color={useColorModeValue("#18216d", "white")}>{txt}</FormLabel>
        {children}
    </React.Fragment>
  )
};

export default ContainerInput