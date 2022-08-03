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
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from '../../assets/logo.png';
// import logo from '../../assets/logo2.0.png'
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box p={4} bgColor={"gray.600"} w={"100%"}>
      <Flex justifyContent={"space-between"}>
        <Link to={"/"}>
          <Heading
            fontWeight={["light", "normal", "medium"]}
            fontSize={["medium", "lg", "2xl"]}
            color={"white"}
          >
            <Image
              src={logo}
              w={16}
            />
          </Heading>
        </Link>
        <Flex display={["block", "block", "none"]} gap={2}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="solid"
            />
            <MenuList >
              <Link to={"/"}>
                <MenuItem >
                  <Text>Home</Text>
                </MenuItem>
              </Link>
              <Link to={'/about'}>
              <MenuItem >About</MenuItem>
              </Link>
              <Link to={'/services'}>
              <MenuItem >Services</MenuItem>
              </Link>
              <Link to={"/projects"}>
                <MenuItem >Projects</MenuItem>
              </Link>
              <Link to={"/contact"}>
              <MenuItem >Contact</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <IconButton
            variant="outline"
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
            aria-label="toggle-dark-mode"
          />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          gap={4}
          display={["none", "none", "block"]}
        >
          <Link to={"/"}>
            <Button variant={"ghost"} color={"greenyellow"}>
              <Text fontWeight={"hairline"} fontSize={['',"2xl"]}>
                Home
              </Text>
            </Button>
          </Link>
          <Link to={'/about'}>
          <Button variant={"ghost"} color={"greenyellow"}>
            <Text fontWeight={"hairline"} fontSize={['',"2xl"]}>
              About
            </Text>
          </Button>
          </Link>
          <Link to={'/services'}>
          <Button variant={"ghost"} color={"greenyellow"}>
            <Text fontWeight={"hairline"} fontSize={['',"2xl"]}>
              Services
            </Text>
          </Button>
          </Link>
          <Link to={"/projects"}>
            <Button variant={"ghost"} color={"greenyellow"}>
              <Text fontWeight={"hairline"} fontSize={['',"2xl"]}>
                Projects
              </Text>
            </Button>
          </Link>
            <Link to={"/contact"}>
          <Button variant={"ghost"} color={"greenyellow"}>
            <Text fontWeight={"hairline"} fontSize={['',"2xl"]}>
              Contact
            </Text>
          </Button>
            </Link>
            <IconButton
            variant="outline"
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
            aria-label="toggle-dark-mode"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
