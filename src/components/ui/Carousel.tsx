import React, { useEffect, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";

// To render the item and iterate through the children
export const CarouselItem = ({ children, width }: any) => {
  return (
    <Flex
      display="inline-flex"
      align="center"
      justifyContent="center"
      height="50rem"
      backgroundColor="primary.100"
      color="primary.800"
      className="carousel-item"
      style={{ width: width }}
    >
      {children}
    </Flex>
  );
};

// Main controller for the carousel
const Carousel = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect((): any => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // Initialise the swipeable component. Update to the next index on SwipeLeft and previous if SwipeRight.
  const handlers = useSwipeable({
    onSwipedLeft: (): any => updateIndex(activeIndex + 1),
    onSwipedRight: (): any => updateIndex(activeIndex - 1),
  });

  const updateIndex = (newIndex: number) => {
    // If the new index is less than 0, set it to the last index
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
      // If the new index is greater than the number of children, set it to the first index
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    // Set the active index to the new index. Update active state.
    setActiveIndex(newIndex);
  };

  return (
    // Carousel container
    <Box
      // Apply handlers to the carousel container {...handlers}
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      overflow="hidden"
      boxSizing="content-box"
    >
      <Box
        className="inner"
        whiteSpace="nowrap"
        transition="transform 0.3s"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child: any, index: number) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </Box>

      {/* Carousel controls */}
      <Flex className="indicators" justifyContent="center">
        <Button m=".5rem" onClick={() => updateIndex(activeIndex - 1)}>
          Prev
        </Button>

        {React.Children.map(children, (child: any, index: number) => {
          return (
            <Button
              className={`${index === activeIndex ? "active" : ""}`}
              backgroundColor="transparent"
              color="primary.800"
              onClick={() => updateIndex(index)}
            >
              {index + 1}
            </Button>
          );
        })}

        <Button m=".5rem" onClick={() => updateIndex(activeIndex + 1)}>
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default Carousel;
