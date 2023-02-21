import React, {FC} from "react";

interface Values {
    activeIndex: number,
    onclick: (index: number) => void,
    sliderImage: {}[]
}

export const Dots: FC<Values> = ({activeIndex, onclick, sliderImage}) => {
    return (
        <div className="all-dots">
            {sliderImage.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    );
}

export default Dots;