import React, {FC} from "react";
import {Box} from "@chakra-ui/react";

interface Values {
    activeIndex: number,
    sliderImage: {
        urls: string
    }[]
}

export const SliderContent: FC<Values> = ({activeIndex, sliderImage}) => {
    return (
        <Box style={{width: "100%", height: "100%"}}>
            {sliderImage.map((slide, index) => (
                <Box
                    style={{width: "100%", height: "100%"}}
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image rounded-2xl" src={slide.urls} width={1000} height={800} alt=""/>
                </Box>
            ))}
        </Box>
    );
}

