import { Button, Center, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Center mt={10}>

    <SimpleGrid columns={[3,4,5,6,7]} spacing={[2,4,8,8,30]}>
        <Button size={'xs'} colorScheme={'teal'} fontSize={['xx-small','x-small','small']} fontWeight={'thin'} w={['80px','90px',
        '110px','110px']}>Digital Videos</Button>
        <Button size={'xs'} colorScheme={'teal'} fontSize={['xx-small','x-small','small']} fontWeight={'thin'} w={['80px','90px',
        '110px','110px']}>Socail Impact Films</Button>
        <Button size={'xs'} colorScheme={'teal'} fontSize={['xx-small','x-small','small']} fontWeight={'thin'} w={['80px','90px',
        '110px','110px']}>Branded Content</Button>
        <Button size={'xs'} colorScheme={'teal'} fontSize={['xx-small','x-small','small']} fontWeight={'thin'} w={['80px','90px',
        '110px','110px']}>TVCs</Button>
        <Button size={'xs'} colorScheme={'teal'} fontSize={['xx-small','x-small','small']} fontWeight={'thin'} w={['80px','90px',
        '110px','110px']}>Animated Videos</Button>
        <Button size={'xs'} colorScheme={'teal'} fontSize={['xx-small','x-small','small']} fontWeight={'thin'} w={['80px','90px',
        '110px','110px']}>Documentries</Button>
        <Button size={'xs'} colorScheme={'teal'} fontSize={['xx-small','x-small','small']} fontWeight={'thin'} w={['80px','90px',
        '110px','110px']}>Corporate Films</Button>
    </SimpleGrid>
    </Center>
  )
}

export default Navbar