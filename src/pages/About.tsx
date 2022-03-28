import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";

const About = () => {
  return (
    <Layout>
      <Flex
        align="center"
        justify={{ base: "center", md: "center", xl: "center" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="nowrap"
        minH="70vh"
        px={8}
        mb={16}
      >
        <VStack>
          <Heading as="h1" mb="4rem" textTransform="uppercase">
            About
          </Heading>
          <Heading size="lg" justifyItems="center" color="brand.900" p={16}>
            Motion Picture Soundtrack are a British alternative rock quartet
            from Canterbury, UK. Since their inception, the band has been
            composed of Alastair Blackwood (lead vocals, guitar, piano), Nick
            Watts (lead guitar, backing vox), Graeme Blackwood (drums) and Will
            Hasler (bass).
          </Heading>
        </VStack>
      </Flex>
    </Layout>
  );
};

export default About;
