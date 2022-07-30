import { Center, Flex } from '@chakra-ui/react'
import React from 'react'
import Team from '../components/Team'
import TeamCard from '../components/TeamCard'

const About = () => {
  return (
    <Center>
        <Flex direction={'column'}>
        <Team/>
        <TeamCard/>
        <Team/>
        <TeamCard/>
        <Team/>
        <TeamCard/>
        </Flex>
    </Center>
  )
}

export default About