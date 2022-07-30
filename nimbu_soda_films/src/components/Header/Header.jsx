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
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
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
              src="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/84978592_506324163410092_4606398471304380416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SuTYMy6vPSUAX_Tt8OO&_nc_ht=scontent-del1-1.xx&oh=00_AT8h3EgA3oSrVMEke_j-o_lrLFxwuNl0dXF9hd66RO8x-g&oe=63063D83"
              w={16}
            />
          </Heading>
        </Link>
        <Box display={["block", "block", "none"]}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="solid"
            />
            <MenuList bgColor={"black"}>
              <Link to={"/"}>
                <MenuItem command="⌘T">
                  <Text>Home</Text>
                </MenuItem>
              </Link>
              <MenuItem command="⌘N">About</MenuItem>
              <MenuItem command="⌘⇧N">Services</MenuItem>
              <Link to={"/projects"}>
                <MenuItem command="⌘O">Projects</MenuItem>
              </Link>
              <Link to={"/contact"}>
              <MenuItem command="⌘O">Contact</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
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
          <Button variant={"ghost"} color={"greenyellow"}>
            <Text fontWeight={"hairline"} fontSize={['',"2xl"]}>
              About
            </Text>
          </Button>
          <Button variant={"ghost"} color={"greenyellow"}>
            <Text fontWeight={"hairline"} fontSize={['',"2xl"]}>
              Services
            </Text>
          </Button>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
