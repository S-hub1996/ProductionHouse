import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Team = () => {
  return (
    <Center>
      <VStack mx={10}>
        <Heading>OUR TEAM</Heading>
        <VStack>
          <Box>
            <Flex gap={4}>
              <Avatar src={""} alt={""} />
              <Heading my={2} fontSize={"lg"}>
                Punit Dhingra, Founder And Crative Director
              </Heading>
            </Flex>
          </Box>
          <Box>
            <Flex gap={4}>
              <Avatar src={""} alt={""} />
              <Heading my={2} fontSize={"lg"}>
                Karan Thapliyal: Director of Photography
              </Heading>
            </Flex>
          </Box>
          <Box>
            <Flex gap={4}>
              <Avatar src={""} alt={""} />
              <Heading my={2} fontSize={"lg"}>
                Nishant Khetrapal : Post-production lead
              </Heading>
            </Flex>
          </Box>
          <Box>
            <Flex gap={4}>
              <Avatar src={""} alt={""} />
              <Heading my={2} fontSize={"lg"}>
                Shiva Kumar : Creative consultant
              </Heading>
            </Flex>
          </Box>
        </VStack>
      </VStack>
    </Center>
  );
};

export default Team;
