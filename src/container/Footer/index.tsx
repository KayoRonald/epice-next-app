import {
  Box,
  Container,
  Image,
  IconButton,
  Stack,
  Text,
  useColorModeValue,

} from '@chakra-ui/react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      as="footer"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Image w="100px" h="100px" src={'https://avatars.githubusercontent.com/u/2523928?s=200&v=4'} alt="Logo do IFPB" />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'800px'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© {new Date().getFullYear()} EPICE</Text>
          <Stack direction={'row'} spacing={6}>
            <IconButton as="a" href='https://github.com/KayoRonald/epice-next-app' aria-label="Github" target="_blank" icon={<FaGithub fontSize="20px" />} />
            <IconButton as="a" href='https://www.instagram.com/epice.2021/' target="_blank" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
