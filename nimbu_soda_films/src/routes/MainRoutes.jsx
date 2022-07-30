import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import Header from '../components/Header/Header';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
const MainRoutes = () => {
  return (
    <Box>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        

    </Box>
  )
}

export default MainRoutes