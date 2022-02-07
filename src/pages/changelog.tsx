import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { Box, Heading, chakra, Text, useColorModeValue, Button } from '@chakra-ui/react'
import clsx from 'clsx'
import fetch from '../lib/fetch';
import { Wrapper } from '../components/Wrapper'
type LogsProps = {
  id: number;
  name: string
  title: string
  text: string
  data: string
  directions: string
  author: string
}

const Changelog = () => {
  const { data, error } = useSWR<LogsProps[]>('/api/logs', fetch)
  const { data: data2 } = useSWR(null, fetch)
  return (
    <React.Fragment>
      <Head>
        <title>Acompanhe os Logs do site</title>
      </Head>
      <Box mt={24} mb={3} minHeight="100vh">
        <Wrapper>
          <div className='wrapper'>
            <div className="center-line">
              <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
            </div>
            {data ? data.map((logs) => (
              <div className={clsx(`row ${logs.directions}`)} id={logs.directions} key={logs.id}>
                <Box id='section' bg={useColorModeValue("#1a202c", "white")}>
                  <i className="icon fas fa-globe"></i>
                  <div className="details">
                    <Heading color={useColorModeValue("white", "black")}>{logs.title}</Heading>
                  </div>
                  <chakra.span fontWeight={'medium'} color={useColorModeValue("white", "black")}>{logs.data}</chakra.span>
                  <Text color={useColorModeValue("white", "black")}>
                    {logs.text}
                  </Text>
                  <Box
                    d='flex'
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <chakra.span fontWeight={'medium'} color={useColorModeValue("white", "black")}>- {logs.author}</chakra.span>
                  </Box>
                </Box>
              </div>
            )) : ''}
          </div>
        </Wrapper>
      </Box>
    </React.Fragment>
  );
};

export default Changelog;