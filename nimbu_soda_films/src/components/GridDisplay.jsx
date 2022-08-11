import { AspectRatio, Box, Center, Image } from '@chakra-ui/react'
import React,{useState} from 'react'
import axios from 'axios'
const GridDisplay = ({embedId}) => {
const [video ,setVideo] = useState([])
    // https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/album/{album_id}
  return (
    <Center >
    <AspectRatio ratio={2} w={["300px","500px","700px"]}> 


    <iframe
    //   width="853"
    //   height="480"
      src={`https://vimeo.com/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      />
      </AspectRatio>
  </Center>
  )
}

export default GridDisplay