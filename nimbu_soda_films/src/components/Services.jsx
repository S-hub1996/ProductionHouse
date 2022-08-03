import {  Center, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Collage from './Collage'

const Services = () => {
  return (
    <Center my={10} >
        <VStack gap={8}>
        <Heading>
            WHAT WE DO?
        </Heading>
<Flex direction={'column'} px={[2,10,20,30]} gap={8}>
        <Text fontWeight={800} textAlign={'center'}>
    
        Pick your medium, because we are always looking for a new story to tell.
        </Text>
<Collage/>
</Flex>
        </VStack>
    </Center>
  )
}

export default Services