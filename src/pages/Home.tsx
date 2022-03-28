import React from "react";
import { Flex } from "@chakra-ui/react";
import Hero from "../components/sections/Hero";
import Layout from "../components/layouts/Layout";
import Iconoclast from "../assets/img/Iconoclast.jpg";
import Shapes from "../assets/img/Shapes.jpg";
import Piano from "../assets/img/pianoiv.jpg";

const Home = () => {
  return (
    <Layout>
      <Hero
        title="Build this website from scratch"
        subtitle="This is the subheader section where you describe the basic benefits of your product."
        image={Iconoclast}
        image2={Shapes}
        image3={Piano}
        ctaText="Get started"
        ctaLink="/"
      />
    </Layout>
  );
};

export default Home;
