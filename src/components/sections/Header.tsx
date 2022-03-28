import React from "react";
import { useState, useRef } from "react";
import {
  Flex,
  Box,
  Link,
  Text,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../ui/Logo";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

// const Header = () => {
//   const [display, setDisplay] = useState("none");
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = useRef();

//   return (
//     <Flex>
//       <Flex align="center" position="fixed" top="1rem" right="1rem">
//         {/* Desktop */}

//         <Flex display={["none", "none", "flex", "flex"]}>
//           <Link href="/" style={{ textDecoration: "none" }}>
//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="Home"
//               my={5}
//               w="100%"
//               color="yellow.300"
//             >
//               Home
//             </Button>
//           </Link>

//           <Link href="/about" style={{ textDecoration: "none" }}>
//             <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
//               About
//             </Button>
//           </Link>

//           <Link href="/portfolio">
//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="Portfolio"
//               my={5}
//               w="100%"
//               color="yellow.300"
//             >
//               Portfolio
//             </Button>
//           </Link>

//           <Link href="/contact" style={{ textDecoration: "none" }}>
//             <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
//               Contact
//             </Button>
//           </Link>
//         </Flex>

//         {/* Mobile */}

//         <IconButton
//           aria-label="Open Menu"
//           size="lg"
//           mr={2}
//           icon={<HamburgerIcon />}
//           onClick={() => setDisplay("flex")}
//           display={["flex", "flex", "none", "none"]}
//         />
//         {/* <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
//           <DrawerOverlay />
//           <DrawerContent> */}

//         <ColorModeSwitcher justifySelf="flex-end" />
//       </Flex>

//       {/* Mobile Content - Dropdown from hamburger menu */}
//       <Flex
//         display={display}
//         w="52vw"
//         h="47vh"
//         top="0"
//         justifyContent="center"
//         mt={5}
//         ml={2}
//         pr={8}
//         bg="gray.900"
//         opacity={0.9}
//         rounded="lg"
//         zIndex={20}
//         pos="fixed"
//         left="22%"
//         overflowY="auto"
//         flexDir="row"
//       >
//         <Flex justify="flex-end">
//           <IconButton
//             mt={2}
//             mr={2}
//             aria-label="Open Menu"
//             size="sm"
//             icon={<CloseIcon />}
//             onClick={() => setDisplay("none")}
//           />
//         </Flex>

//         <Flex flexDir="column" align="center">
//           <Link href="/" style={{ textDecoration: "none" }}>
//             <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
//               Home
//             </Button>
//           </Link>

//           <Link href="/about" style={{ textDecoration: "none" }}>
//             <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
//               About
//             </Button>
//           </Link>

//           <Link href="/portfolio" style={{ textDecoration: "none" }}>
//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="Portfolio"
//               my={5}
//               w="100%"
//             >
//               Portfolio
//             </Button>
//           </Link>

//           <Link href="/contact" style={{ textDecoration: "none" }}>
//             <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
//               Contact
//             </Button>
//           </Link>
//         </Flex>
//         {/* <DrawerCloseButton />
//         </DrawerContent>

//         </Drawer> */}
//       </Flex>
//     </Flex>
//   );
// };

// export default Header;

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
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header = (props: any) => {
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
      bg={["transparent", "transparent", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w={["100%", "100%", "100%", "100%"]}
          color={["primary.800", "primary.800", "primary.800", "primary.800"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <HamburgerIcon /> : "B"}
      </Box>

      {/* <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        onClick={() => setShow("flex")}
        display={["flex", "flex", "none", "none"]}
      />

      <Flex
        display={show}
        w="52vw"
        h="47vh"
        top="0"
        justifyContent="center"
        mt={5}
        ml={2}
        pr={8}
        bg="gray.900"
        opacity={0.9}
        rounded="lg"
        zIndex={20}
        pos="fixed"
        left="22%"
        overflowY="auto"
        flexDir="row"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="sm"
            icon={<CloseIcon />}
            onClick={() => setShow("none")}
          />
        </Flex> */}

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
            <Button
              size="lg"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.800",
                  "primary.800",
                  "primary.800",
                  "primary.800",
                ],
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
