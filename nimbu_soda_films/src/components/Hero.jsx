import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
  } from '@chakra-ui/react';
  import {TiSocialYoutube} from 'react-icons/ti'
  import {SiGmail} from 'react-icons/si'
  export default function Hero() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/291849671_1014823162560187_7194076868311044723_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wofyQOWK96IAX_1y-R6&_nc_ht=scontent-del1-1.xx&oh=00_AT8dX7FkaATcgaOnGgUAU_yldEq0rT-UlxCQ9YVkKlmhNA&oe=62E52D8A)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                <Heading>Nimbu Soda Films</Heading>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                <SiGmail/>
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                <TiSocialYoutube/>
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }