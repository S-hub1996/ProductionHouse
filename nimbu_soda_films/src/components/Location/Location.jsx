import { Center } from '@chakra-ui/react'
import React from 'react'

const Location = () => {
  return (
    <Center w={"100%"}>
      <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.7389933274!2d76.8130817242655!3d28.64667727787915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1659191087602!5m2!1sen!2sin"} 
      width="100%" height="350" border={0} allowfullscreen="" loading="lazy" title='MAP' referrerpolicy="no-referrer-when-downgrade"/>

    
    </Center>
  )
}

export default Location