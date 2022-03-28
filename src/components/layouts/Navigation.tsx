import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../Logo";

const Navigation = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Flex alignItems="center">
        <Box as="a" href="/" mr={5}>
          <Logo />
        </Box>
        <Heading fontSize="lg" fontWeight="normal" mr={5}>
          MPS
        </Heading>
      </Flex>
      <Flex alignItems="center">
        <Box as="a" href="/" mr={5}>
          Home
        </Box>
        <Box as="a" href="/about" mr={5}>
          About
        </Box>
        <Box as="a" href="/contact" mr={5}>
          Contact
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navigation;
