import {  Center, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Center my={10} >
        <VStack gap={8}>
        <Heading>
            WHO WE ARE?
        </Heading>
<Flex direction={'column'} px={[20,30,40,60,80]} gap={8}>
        <Text>
    
        A Delhi based video agency which specializes in content generation for 
digital mediums and television. We create immersive experiences for 
branded content, social impact films, and a wide array of fiction and non-fiction series.
        </Text>
        <Text>
        We are a team of young filmmakers with overall 40+ years of combined 
experiences in varied brands such as Airtel, History TV 18, Discovery, 
National Geographic, Snapdeal, Times Now. Our main objective is to use 
visual storytelling in an artistic and creative manner to meet the individual 
needs of clients. 
        </Text>
</Flex>
        </VStack>
    </Center>
  )
}

export default About