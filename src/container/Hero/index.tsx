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
import { MotionBox } from "@/components/index";
import { Player } from '@lottiefiles/react-lottie-player';
import animationData2 from '../../data/animation/88367-students-jumping.json';
const DURATION = 1000;

export default function HomeHero() {
  const icp = useColorModeValue("#18216d", "white");
  return (
    <Container maxW={'7xl'} id="intro">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', lg: 'row' }}>
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
              EPICE
            </Text>
            <Text as="span">, {new Date().getFullYear()}.</Text>
            <br />
          </Heading>
          <Text color={icp}>
            Encontro Picuiense de Computação e Eletrônica do IFPB Campus Picuí!
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
        {/* <MotionBox
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          width={["100%", "70%", "60%", "60%"]}
          margin="0 auto"
        > */}
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            w={'full'}>
            <Center>
              <Player
                autoplay
                loop
                src={animationData2}
                style={{ height: "500px", width: "500px" }}
              />
              {/* <Image
                alt={'Hero Image'}
                objectFit={'cover'}
                alignItems='center'
                w={'100%'}
                h={'100%'}
                loading="lazy"
                src={
                  '/img/svg/undraw_group_video_re_btu7.svg'
                }
              /> */}
            </Center>
          </Flex>
        {/* </MotionBox> */}
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