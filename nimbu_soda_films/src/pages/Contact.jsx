import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import Location from "../components/Location/Location";
import Team from "../components/Team";

const Contact = () => {
  return (
    <Flex direction={'column'}>
      <Hero />
      <Team/>
      <Location />
    </Flex>
  );
};

export default Contact;
