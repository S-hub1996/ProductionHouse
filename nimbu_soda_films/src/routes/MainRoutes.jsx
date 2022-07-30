import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import Header from '../components/Header/Header';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Services from '../pages/Services';
import NotFound from '../pages/NotFound';
import Footer from '../components/Footer/Footer';
const MainRoutes = () => {
  return (
    <Box>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
        

    </Box>
  )
}

export default MainRoutes