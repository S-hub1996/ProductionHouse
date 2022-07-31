import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Team from '../components/Team'
import TeamCard from '../components/TeamCard'

const About = () => {
  return (
    <Center mx={10}>
      <Flex direction={'column'} gap={20}>
<Flex direction={'column'} px={[5,20,30,40]} gap={8}>
        <Text>
    
       Nimbu Soda Films is a Delhi based video agency which specializes in content generation for 
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
        <Team/>
        <TeamCard/>
        <Team/>
        <TeamCard/>
        </Flex>
    </Center>
  )
}

export default About