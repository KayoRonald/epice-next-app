/* eslint-disable */
import React from 'react';
import {
  Button, chakra, Flex, HStack,
  IconButton, VisuallyHidden, useColorModeValue, useColorMode
} from '@chakra-ui/react';
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { Desktop, Mobile } from './components'
const DURATION = 1000;
export default function NavHero() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <React.Fragment>
      <chakra.header
        borderTop="10px solid #8257e5"
        shadow="md"
        transition="all 0.5s ease-in-out"
        pos="fixed"
        top="0"
        zIndex="modal"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        mb={2}
        boxShadow="none"
        bg={useColorModeValue("#ffffffd6", "#1a202cd1")}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto" as="nav">
          <Flex>
            <chakra.a
              href="/"
              title="EPICE 2021"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>EPICE 2021</VisuallyHidden>
            </chakra.a>
            <chakra.h1 as="a"  href="/" fontSize="xl" fontWeight="bold" ml="2" color={useColorModeValue("#18216d", "white")}>
              EPICE 2021
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <Desktop />
            <HStack spacing={1} direction='row'>
              <Button
                bg="purple.500"
                color="white"
                size="sm"
                _hover={{
                  bg: 'purple.600'
                }}>
                <Link
                  to="contact"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={DURATION}
                  activeClass="active"
                  style={{
                    color: 'currentcolor'
                  }}
                >
                  Inscrições
                </Link>
              </Button>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${colorMode === 'light' ? 'Dark' : 'Light'} mode`}
                bg={useColorModeValue("gray.50", "#464460")}
                _hover={{ bg: useColorModeValue("gray.50", "#464460")}}
                color={useColorModeValue("gray.800", "white")}
                boxShadow={"none"}
                ml={{ base: "0", md: "3" }}
                onClick={toggleColorMode}
                icon={colorMode !== 'light' ? <FaMoon /> : <FaSun />}
              />
            </HStack>
            <Mobile />
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment >
  );
};