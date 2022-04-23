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
  iconinput?: React.ReactNode;
  iconleft?: React.ReactNode;
  children?: React.ReactNode;
  iserror?: boolean;
}

const ContainerInput = ({ txt, iconinput, children }: PropsBox) => {
  return (
    <React.Fragment>
      <FormLabel color={useColorModeValue("#18216d", "white")}>{txt}</FormLabel>
        {children}
    </React.Fragment>
  )
};

export default ContainerInput