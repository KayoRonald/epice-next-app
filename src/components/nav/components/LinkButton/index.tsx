import {chakra} from '@chakra-ui/react';
type LinkProps = {
  children?: React.ReactNode;
}
const LinkButton = ({ children }: LinkProps) => {
  return (
    <chakra.p
      fontSize="18px"
      fontWeight='bold'
      _hover={{
        color: 'rgb(255, 130, 92)',
        textUnderlinePosition: 'under',
        textDecoration: 'rgb(255, 130, 92) wavy underline'
      }}
      _active={{
        color: 'rgb(255, 130, 92)',
        textUnderlinePosition: 'under',
        textDecoration: 'rgb(255, 130, 92) wavy underline'
      }}
    >
      {children}
    </chakra.p>
  )
}

export default LinkButton