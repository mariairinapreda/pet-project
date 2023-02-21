import React, {useEffect, useState} from "react";
import {SliderContent} from "./SliderContent";
import Dots from "./Dots";
import {Arrows} from "./Arrows";
import sliderImage from "./SliderImage";
import {Box} from "@chakra-ui/react";
import {ArrowDownIcon} from "@chakra-ui/icons";

const len = sliderImage.length - 1;

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <Box className="slider-container container">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage}/>
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => {
                    setActiveIndex(activeIndex)
                }}
            />
            <svg className="animate-bounce z-40 w-20 h-20 bg-teal-500 rounded-full">
                <ArrowDownIcon/>
            </svg>


        </Box>
    );
}

export default Slider;