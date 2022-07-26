import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box border={'1px solid '} p={12} bg={'black'}>
      <Flex justifyContent={'space-between'}>
        <Heading fontSize={'xl'} fontWeight={'md'} color={'GrayText'}>nimbuSodaFilms</Heading>
        <Flex  gap={8}>
          <Button variant={'link'} color={'yellowgreen'}>Home</Button>
          <Button variant={'link'} color={'yellowgreen'}>About</Button>
          <Button variant={'link'} color={'yellowgreen'}>Projects</Button>
          <Button variant={'link'} color={'yellowgreen'}>Services</Button>
          <Button variant={'link'} color={'yellowgreen'}>Contact</Button>
        </Flex>
      </Flex>

    </Box>
  )
}

export default Header