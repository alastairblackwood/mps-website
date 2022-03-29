import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Button,
  useDisclosure,
  DrawerOverlay,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import Logo from "../ui/Logo";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import NavButton from "../ui/Button";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLInputElement>(null);

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
          w="100%"
          color={["brand.800", "brand.800", "brand.800", "brand.800"]}
        />
      </Flex>

      <Button
        display={{ base: "block", md: "none" }}
        size="lg"
        rightIcon={<MdMenu size="2rem" />}
        variant="outline"
        color="black"
        ref={btnRef}
        onClick={onOpen}
      ></Button>
      <Drawer
        isOpen={isOpen}
        colorScheme="black"
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            {" "}
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About </MenuItem>
            <MenuItem to="/music">Music </MenuItem>
            <MenuItem to="/gallery">Gallery </MenuItem>
            <MenuItem to="/videos">Videos </MenuItem>
            <MenuItem to="/contact">Contact </MenuItem>
            <ColorModeSwitcher />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* mobile break points */}
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        {/* mobile nav bar menu */}
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          textTransform="uppercase"
          fontWeight="semi-bold"
          color="brand.800"
          fontSize={{ base: "lg", md: "xl" }}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About </MenuItem>
          <MenuItem to="/music">Music </MenuItem>
          <MenuItem to="/gallery">Gallery </MenuItem>
          <MenuItem to="/videos">Videos </MenuItem>
          <MenuItem to="/contact">Contact </MenuItem>
          <ColorModeSwitcher />
          <MenuItem to="/signup" isLast>
            {/* Signup button */}
            <Button
              size="lg"
              rounded="md"
              color={["brand.700", "brand.700", "brand.700", "brand.700"]}
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
