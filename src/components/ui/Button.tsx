import React from "react";
import { Button } from "@chakra-ui/react";

const NavButton = () => {
  return (
    <Button
      variant="ghost"
      size="10rem"
      h="4rem"
      w="100%"
      p={4}
      textTransform="uppercase"
      _hover={{ backgroundColor: "brand.600" }}
    ></Button>
  );
};

export default NavButton;
