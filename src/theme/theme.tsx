import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#faf9f9",
    200: "#f4f2f2",
    300: "#f0eeee",
    400: "#ccc",
    500: "#777",
    600: "#999",
    700: "#333",
    800: "#000",
    900: "#910505",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
