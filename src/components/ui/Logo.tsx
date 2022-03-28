import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
        MotionPictureSoundtrack
      </Text>
    </Box>
  );
};

export default Logo;
