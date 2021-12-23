import React from 'react'
import { InputProps as ChakraInputProps, ButtonProps as ChakaraProps } from '@chakra-ui/react'

export type ChakraProps = {
  children?: React.ReactNode;
  cookies?: string;
};

export type MiddleBlockProps = {
  title: string;
  content: string;
  id: number;
  directions: string;
  img: string;
}

export interface InputProps extends ChakraInputProps {
  name: string;
  txt?: string;
  placeholder: string;
  type?: string;
  value?: string;
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}