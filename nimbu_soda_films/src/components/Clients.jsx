import { Center, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Services = () => {
  return (
    <Center my={10} >
        <VStack gap={8}>
        <Heading>
           OUR CLIENTS
        </Heading>
<Flex direction={'column'} px={[20,30]} gap={8}>
        <Text fontWeight={800} textAlign={'center'}>
    
        We believe that every brand has a story to tell, and the core responsibility of a video agency 
lies in the perfect amalgamation of an insightful strategy and meaningful story telling.

        </Text>
        <SimpleGrid columns={[1,2,3,4,5]} spacing={[10,20,30]}>
            <Center  fontWeight={'bold'} p={4} w='100%' h='100' bg='green.500' >DIGITAL VIDEOS</Center>
            <Center  fontWeight={'bold'} p={4} w='100%' h='100' bg='orange.500' >SOCIAL IMPACT FILMS</Center>
            <Center  fontWeight={'bold'} p={4} w='100%' h='100' bg='yellow.500' >BRANDED CONTENT</Center>
            <Center  fontWeight={'bold'} p={4} w='100%' h='100' bg='red.500' >TVCs</Center>
            <Center  fontWeight={'bold'} p={4} w='100%' h='100' bg='blue.500' >ANIMATED VIDEOS</Center>
            <Center  fontWeight={'bold'} p={4} w='100%' h='100' bg='purple.500' >DOCUMENTRIES</Center>
            <Center  fontWeight={'bold'} p={4} w='100%' h='100' bg='gray.500' >CORPORATE FILMS</Center>
        </SimpleGrid>
</Flex>
        </VStack>
    </Center>
  )
}

export default Services