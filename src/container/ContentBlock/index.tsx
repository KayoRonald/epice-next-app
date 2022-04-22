import React from 'react'
import {
  Box, Container, Text, Heading,
  Stack, SimpleGrid, Avatar, Center, IconButton, useColorModeValue
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { palestrantes as data } from '@/data/palestrante';

// type Props = {
//   id: number;
//   avatar: string;
//   name: string;
//   frase: string;
//   instagram?: string;
//   email?: string;
//   linkedinIn?: string;
//   github?: string;
// }

const Palestrantes = () => {
  const ic = useColorModeValue("#18216d", "white");
  return (
    <Box as="section" id="palestras">
      <Box>
        <Container py="80px" textAlign="center">
          <Heading
            color="teal.400"
            textStyle="heading"
            mb="5"
            fontWeight="bold"
            fontSize="5xl"
          >
            Palestrantes
          </Heading>
          <Text maxW="56ch" mx="auto" fontSize="lg" color={ic}>
            Pessoas incríveis que contribuíram com tempo,
            esforço e pensamento. Sem eles,
            este projeto não seria possível.
          </Text>
        </Container>
      </Box>
      <Box mb="60px" as="section">
        <Container maxWidth="150ch">
          <Stack spacing={8}>
            <SimpleGrid columns={[1, 1, 2]} spacing="40px" pt="3">
              {data.map((member) => (
                <Fade key={member.id}>
                  <Box borderLeftWidth="4px" borderLeftColor="purple.500" padding="7px" borderRadius="4px" key={member.id}>
                    <Stack direction="column" spacing={6} textAlign="center">
                      <Center>
                        <Avatar
                          size="2xl"
                          src={member.avatar}
                          name={member.name}
                          borderColor="purple.500"
                          borderWidth={4}
                          key={member.id}
                        />
                      </Center>
                      <Stack
                        spacing={3}
                        bg={useColorModeValue('#dfeafe', '#2c313d')}
                        p={5}
                        pos="relative"
                        borderRight={2}
                        _before={{
                          content: `""`,
                          w: 0,
                          h: 0,
                          borderLeft: 'solid transparent',
                          borderLeftWidth: 16,
                          borderRight: 'solid transparent',
                          borderRightWidth: 16,
                          borderTop: 'solid',
                          borderTopWidth: 16,
                          borderTopColor: useColorModeValue('#dfeafe', '#2c313d'),
                          pos: 'absolute',
                          top: '-16px',
                          left: '50%',
                          transform: 'translateX(-50%) rotate(540deg)',
                        }}
                      >
                        <Text fontWeight="bold" fontSize="md" color={ic}>
                          {member.name}
                        </Text>
                        <Text
                          color={ic}
                          dangerouslySetInnerHTML={{
                            __html: member.frase
                          }} />
                        <Center>
                          <Stack direction={'row'} spacing={3}>
                            <IconButton
                              as="a"
                              href={member.instagram}
                              target="_blank"
                              aria-label="Instagram"
                              icon={<FaInstagram fontSize="24px" />}
                            />
                            {member.email != null ? (
                              <IconButton
                                as="a"
                                href={member.email}
                                target="_blank"
                                aria-label="linkedinIn"
                                icon={<FaGithub fontSize="24px" />}
                              />
                            ) : (
                              <React.Fragment />
                            )}
                            <IconButton
                              as="a"
                              href={member.linkedinIn}
                              target="_blank"
                              aria-label="linkedinIn"
                              icon={<FaLinkedinIn fontSize="24px" />}
                            />
                            {member.github != null ? (
                              <IconButton
                                as="a"
                                href={member.github}
                                target="_blank"
                                aria-label="linkedinIn"
                                icon={<FaGithub fontSize="24px" />}
                              />
                            ) : (
                              <React.Fragment />
                            )}
                          </Stack>
                        </Center>
                      </Stack>
                    </Stack>
                  </Box>
                </Fade>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('/api/')
//   const posts: Props[] = await res.json()

//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default Palestrantes