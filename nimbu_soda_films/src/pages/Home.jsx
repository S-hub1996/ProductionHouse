import { Box } from '@chakra-ui/react'
import React from 'react'
import About from '../components/About'
import Clients from '../components/Clients'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home = () => {
  return (
    <Box>
        
        <Hero/>
        <About/>
        <Services/>
        <Clients/>
    </Box>
  )
}

export default Home