import { Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Projects/Navbar";
import Video from "../components/Projects/Videos";

const Projects = () => {
  return (
    <Center>
      <Flex direction={"column"}>
      <Navbar/>
        <Heading textAlign={"center"} my={10} >
          OUR WORK
        </Heading>
        <SimpleGrid columns={[1]} spacing={[10, 20, 30]}>
          <Heading textAlign={"center"} fontWeight={"medium"} fontSize={"2xl"}>
            Philips CSR Film
          </Heading>
          <Video embedId={"PkCiwrQ_x9Y"} />
          <Text textAlign={"center"} mx={[10, 20, 30, 40]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            accusantium odit illum vitae sint explicabo mollitia, nihil
            distinctio ipsum quas, quo, ad assumenda recusandae fugiat aliquam
            porro facilis reprehenderit ratione minus! Velit cumque, architecto
            deserunt qui nesciunt omnis doloribus.
          </Text>
          <Heading textAlign={"center"} fontWeight={"medium"} fontSize={"2xl"}>
          Birds Safety, Wildlife Trust of India.
          </Heading>
          <Video embedId={"yLQXJM9fixw"} />
          <Text textAlign={"center"} mx={[10, 20, 30, 40]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            accusantium odit illum vitae sint explicabo mollitia, nihil
            distinctio ipsum quas, quo, ad assumenda recusandae fugiat aliquam
            porro facilis reprehenderit ratione minus! Velit cumque, architecto
            deserunt qui nesciunt omnis doloribus.
          </Text>
          <Heading textAlign={"center"} fontWeight={"medium"} fontSize={"2xl"}>
            WhiteHat Preview File
          </Heading>
          <Video embedId={"jY3qgjkLKP0"} />
          <Text textAlign={"center"} mx={[10, 20, 30, 40]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            accusantium odit illum vitae sint explicabo mollitia, nihil
            distinctio ipsum quas, quo, ad assumenda recusandae fugiat aliquam
            porro facilis reprehenderit ratione minus! Velit cumque, architecto
            deserunt qui nesciunt omnis doloribus.
          </Text>
          <Heading textAlign={"center"} fontWeight={"medium"} fontSize={"2xl"}>
            CSR Film - Apollo Tyres
          </Heading>
          <Video embedId={"OCS6Bc0ZTXc"} />
          <Text textAlign={"center"} mx={[10, 20, 30, 40]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            accusantium odit illum vitae sint explicabo mollitia, nihil
            distinctio ipsum quas, quo, ad assumenda recusandae fugiat aliquam
            porro facilis reprehenderit ratione minus! Velit cumque, architecto
            deserunt qui nesciunt omnis doloribus.
          </Text>
          <Heading textAlign={"center"} fontWeight={"medium"} fontSize={"2xl"}>
            Star Sports Cricket Teaser - Indian Super League
          </Heading>
          <Video embedId={"Az9XavhsuT0"} />
          <Text textAlign={"center"} mx={[10, 20, 30, 40]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            accusantium odit illum vitae sint explicabo mollitia, nihil
            distinctio ipsum quas, quo, ad assumenda recusandae fugiat aliquam
            porro facilis reprehenderit ratione minus! Velit cumque, architecto
            deserunt qui nesciunt omnis doloribus.
          </Text>
          <Heading textAlign={"center"} fontWeight={"medium"} fontSize={"2xl"}>
           Introduction of Richard Fairbank, CEO of PayU
          </Heading>
          <Video embedId={"mVLa9-R-Re0"} />
          <Text textAlign={"center"} mx={[10, 20, 30, 40]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            accusantium odit illum vitae sint explicabo mollitia, nihil
            distinctio ipsum quas, quo, ad assumenda recusandae fugiat aliquam
            porro facilis reprehenderit ratione minus! Velit cumque, architecto
            deserunt qui nesciunt omnis doloribus.
          </Text>
          <Heading textAlign={"center"} fontWeight={"medium"} fontSize={"2xl"}>
          Jewelkari.com Rakshabandhan 2019
          </Heading>
          <Video embedId={"IqDIrznHJCw"} />
          <Text textAlign={"center"} mx={[10, 20, 30, 40]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            accusantium odit illum vitae sint explicabo mollitia, nihil
            distinctio ipsum quas, quo, ad assumenda recusandae fugiat aliquam
            porro facilis reprehenderit ratione minus! Velit cumque, architecto
            deserunt qui nesciunt omnis doloribus.
          </Text>
        </SimpleGrid>
      </Flex>
    </Center>
  );
};

export default Projects;
