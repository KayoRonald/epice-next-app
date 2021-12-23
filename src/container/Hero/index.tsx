import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Img as Image,
  useColorModeValue,
  Center,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
const DURATION = 1000;

export default function HomeHero() {
  const icp = useColorModeValue("#18216d", "white");
  return (
    <Container maxW={'7xl'} id="intro">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} mb={3}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            color={icp}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}>
              Epice
            </Text>
            <Text as="span">, 2021.</Text>
            <br />
          </Heading>
          <Text color={icp}>
            Encontro Picuiense de Computação e Eletrônica do IFPB campus Picui!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction='column'
          >
            <Link
              to="contact"
              spy={false}
              smooth="easeInOutQuart"
              duration={DURATION}
              activeClass="active"
              color="white"
            >
              <Button
                bg="purple.500"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                color='white'
                w="100%"
                _hover={{
                  bg: 'purple.600'
                }}
                outline={'none'}
              >
                Inscrições
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          w={'full'}>
          <Box
            rounded={'2xl'}
            width={'full'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              loading="lazy"
              src={
                '/img/svg/undraw_group_video_re_btu7.svg'
              }
            />
          </Box>
        </Flex>
      </Stack>
      <Center>
        <span className="scroll-btn">
          <Link
            to="sobre"
            spy={false}
            smooth="easeInOutQuart"
            duration={DURATION}
            activeClass="active"
            color="white">
            <span className="mouse">
              <span>
              </span>
            </span>
          </Link>
        </span>
      </Center>
    </Container>
  );
}