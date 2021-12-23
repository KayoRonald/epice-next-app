import { HStack, chakra } from '@chakra-ui/react';
import { Link as LinkScroll } from "react-scroll";
import LinkButton from '../LinkButton';
import Link from 'next/link'

const DURATION = 1000;
export default function Desktop() {
  return (
    <HStack
      spacing={1}
      mr={1}
      color="brand.500"
      display={{ base: "none", md: "inline-flex" }}
    >
      <LinkButton>
        <LinkScroll
          to="palestras"
          spy={false}
          smooth="easeInOutQuart"
          duration={DURATION}
          activeClass="active"
        >
          Palestras
        </LinkScroll>
      </LinkButton>
      <LinkButton>
        <chakra.span
          paddingLeft='10px'
        >
          <Link
            href="/contact"
          >
            Contato
          </Link>
        </chakra.span>
      </LinkButton>
      <LinkButton>
        <LinkScroll
          to="mission"
          spy={false}
          smooth="easeInOutQuart"
          duration={DURATION}
          activeClass="active"
          style={{
            paddingLeft: '10px'
          }}
        >
          Programação
        </LinkScroll>
      </LinkButton>
    </HStack >
  )
}