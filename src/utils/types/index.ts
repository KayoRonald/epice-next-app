import React from 'react'
import { InputProps as ChakraInputProps } from '@chakra-ui/react'

export type ChakraProps = {
  children?: React.ReactNode;
  cookies?: string;
};

export type MiddleBlockProps = {
  title?: string;
  content?: string;
  id?: number;
  directions?: string;
  img?: string;
}

export type InputProps = ChakraInputProps & {
  name: string;
  txt?: string;
  isError?: boolean;
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export type Merge<P, T> = Omit<P, keyof T> & T;

export type PropsQl = {
  title: string
  content: string
  data: []
  updatedBy: {
    name: string
    picture: string
  }
}

export type FormValues = {
  name: string;
  email: string;
  curso: string;
};