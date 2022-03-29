import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./pages/Home";
import Music from "./pages/Music";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Flex minHeight="calc(100vh - 157px)">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/gallery" element={<Music />} />
          <Route path="/videos" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Flex>
    </>
  );
};

export default App;
