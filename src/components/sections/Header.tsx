import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Logo from "../ui/Logo";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

interface MenuItemsProps {
  children: React.ReactNode;
  isLast?: boolean;
  to: string;
}

const MenuItem = ({ children, isLast, to = "/", ...rest }: MenuItemsProps) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      fontWeight="semi-bold"
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props: any) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="transparent"
      color={["white", "white", "brand.700", "brand.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w={["100%", "100%", "100%", "100%"]}
          color={["brand.800", "brand.800", "brand.800", "brand.800"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? (
          <AiOutlineClose color="black" size="2rem" />
        ) : (
          <GiHamburgerMenu color="black" size="2rem" />
        )}
      </Box>

      {/* mobile break points */}
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          textTransform="uppercase"
          fontWeight="semi-bold"
          fontSize={{ base: "lg", md: "xl" }}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About </MenuItem>
          <MenuItem to="/discography">Discography </MenuItem>
          <MenuItem to="/contact">Contact </MenuItem>
          <ColorModeSwitcher />
          <MenuItem to="/signup" isLast>
            {/* Signup button */}
            <Button
              size="lg"
              rounded="md"
              color={["brand.500", "brand.500", "white", "white"]}
              bg={["white", "white", "brand.500", "brand.500"]}
              _hover={{
                bg: ["brand.800", "brand.800", "brand.800", "brand.800"],
              }}
            >
              Sign Up
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
