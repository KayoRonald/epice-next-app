import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import {
  Box, Stack, Center, IconButton, SkeletonCircle, SkeletonText
} from '@chakra-ui/react';
export default function Skeleton() {
  return (
    <Box borderLeftWidth="4px" borderLeftColor="purple.500" padding="7px" borderRadius="4px">
      <Stack direction="column" spacing={6} textAlign="center">
        <Center>
          <SkeletonCircle size='40' />
        </Center>
        <Stack spacing={3}>
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
          <Center>
            <Stack direction={'row'} spacing={3}>
              <IconButton
                as="a"
                href='/'
                target="_blank"
                aria-label="Instagram"
                icon={<FaInstagram fontSize="24px" />}
              />
            </Stack>
          </Center>
        </Stack>
      </Stack>
    </Box>
  )
}