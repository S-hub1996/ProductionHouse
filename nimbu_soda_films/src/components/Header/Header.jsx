import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box border={"1px solid"} p={4} bgColor={"gray.600"}>
      <Flex justifyContent={"space-between"}>
        <Heading
          fontWeight={["light", "normal", "medium"]}
          fontSize={["medium", "lg", "2xl"]}
          color={"white"}
        >
          nimbuSodaFilms
        </Heading>
        <Box display={["block", "block", "none"]}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="solid"
            />
            <MenuList bgColor={"black"}>
                <Link to={'/'}>
              <MenuItem command="⌘T">Home</MenuItem>
                </Link>
              <MenuItem command="⌘N">About</MenuItem>
              <MenuItem command="⌘⇧N">Services</MenuItem>
              <Link to={'/projects'}>
              <MenuItem command="⌘O" >Projects</MenuItem>
              </Link>
              <MenuItem command="⌘O">Contact</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Flex
          justifyContent={"space-between"}
          gap={4}
          display={["none", "none", "block"]}
        >
          <Button variant={"ghost"} color={"greenyellow"}>
            Home
          </Button>
          <Button variant={"ghost"} color={"greenyellow"}>
            About
          </Button>
          <Button variant={"ghost"} color={"greenyellow"}>
            Services
          </Button>
          <Link to={'/projects'}>
          <Button variant={"ghost"} color={"greenyellow"}>
            Projects
          </Button>
          </Link>
          <Button variant={"ghost"} color={"greenyellow"}>
            Contact
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
