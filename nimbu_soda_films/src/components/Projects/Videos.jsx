import { AspectRatio, Center } from "@chakra-ui/react";
import React from "react";


const Video = ({ embedId }) => (
  <Center >
    <AspectRatio ratio={2} w={["300px","500px","700px"]}> 


    <iframe
    //   width="853"
    //   height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      />
      </AspectRatio>
  </Center>
);


export default Video;