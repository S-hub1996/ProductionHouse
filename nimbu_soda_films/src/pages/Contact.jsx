import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import Location from "../components/Location/Location";

const Contact = () => {
  return (
    <Flex direction={'column'}>
      <Hero />
      <Location />
    </Flex>
  );
};

export default Contact;
