import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import Carousel, { CarouselItem } from "../ui/Carousel";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  image2: string;
  image3: string;
  ctaText: string;
  ctaLink: string;
}

const Hero = ({
  title,
  subtitle,
  image,
  image2,
  image3,
  ctaText,
  ctaLink,
  ...rest
}: HeroProps) => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "center", xl: "center" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Box
        w={{ base: "80%", md: "50%" }}
        mb={{ base: 12, md: 0 }}
        mt={{ base: 16, md: 0 }}
      >
        <Carousel>
          <CarouselItem>
            <Image src={image} rounded="1rem" shadow="2xl" />
          </CarouselItem>
          <CarouselItem>
            <Image src={image2} rounded="1rem" shadow="2xl" />
          </CarouselItem>
          <CarouselItem>
            <Image src={image3} rounded="1rem" shadow="2xl" />
          </CarouselItem>
        </Carousel>
      </Box>
    </Flex>
  );
};

export default Hero;

{
  /* FOR REFERENCE PURPOSES ONLY */
}
{
  /* <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="10rem"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="6rem"
          fontWeight="normal"
          color="primary.800"
          opacity="0.8"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            // variantColor="primary"
            borderRadius=".8rem"
            py="4"
            px="4"
            lineHeight="1"
            size="5rem"
            // rightIcon="chevron-right"
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize="2rem"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          No credit card required.
        </Text>
      </Stack> */
}
