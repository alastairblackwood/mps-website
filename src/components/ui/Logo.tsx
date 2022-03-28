import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Text
        fontSize="2xl"
        fontWeight="semi-bold"
        textTransform="uppercase"
        letterSpacing="tighter"
      >
        M o t i o n P i c t u r e S o u n d t r a c k
      </Text>
    </Box>
  );
};

export default Logo;
