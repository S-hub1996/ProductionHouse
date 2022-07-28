import { Box } from '@chakra-ui/react'
import React from 'react'
import About from '../components/About'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'

const Home = () => {
  return (
    <Box>
        <Hero/>
        <About/>
        <Services/>
        <Clients/>
        <Team/>
        <Contact/>
    </Box>
  )
}

export default Home