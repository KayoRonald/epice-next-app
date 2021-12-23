import type { NextPage } from 'next'
import { Jumbotron } from '../../components';
import {
  Heading, Image, Skeleton, Text, useColorModeValue, Icon, Flex,
  IconProps, Box
} from '@chakra-ui/react';
import { MiddleBlockProps } from '../../types'
const MiddleBlock: NextPage<MiddleBlockProps> = ({ title, content, id, directions, img }) => {
  const ic = useColorModeValue("#18216d", "white");
  return (
    <Box id="sobre" pt={7}>
      <Jumbotron.Container>
        <Jumbotron key={id} directions={directions}>
          <Jumbotron.Pane>
            <Heading color={ic}>{title}</Heading>
            <Text color={ic}>
              {content}
            </Text>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}>
              <Blob
                mt={2}
                w={'150%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                zIndex={-1}
                color='purple.300'
              />
              <Image mt={2} id={`id${id}`} src={img} alt={title} fallback={<Skeleton />} />
            </Flex>
          </Jumbotron.Pane>
        </Jumbotron>
      </Jumbotron.Container>
    </Box>
  );
};

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default MiddleBlock;