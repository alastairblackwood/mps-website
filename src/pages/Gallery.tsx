import { Flex, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layouts/Layout";
import MPSCurtain from "../assets/img/MPSCURTAIN-low-res.jpg";
import MPSDoor1 from "../assets/img/MPS.DOOR3-2-low-res.jpg";
import MPSFlag from "../assets/img/MPS-al-leeds-flag-gtr.jpg";
import MPSLiveCamden from "../assets/img/MPS-live-camden.jpg";

const Gallery = () => {
  return (
    <Layout>
      <Heading>Gallery</Heading>
      <Flex
        align="center"
        justify={{ base: "center", md: "center", xl: "center" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="wrap"
        minH="70vh"
        px={8}
        mb={16}
      >
        <Flex flexFlow="wrap">
          <Image src={MPSCurtain} h="20rem" w="20rem" alt="MPS Curtain" />
          <Image src={MPSDoor1} h="20rem" w="20rem" alt="MPS Door" />
          <Image src={MPSFlag} h="15rem" w="25rem" alt="MPS Flag" />
          <Image
            src={MPSLiveCamden}
            h="15rem"
            w="21rem"
            alt="MPS Live Camden"
          />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Gallery;
