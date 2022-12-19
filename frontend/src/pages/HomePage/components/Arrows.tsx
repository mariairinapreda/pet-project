import React, {FC} from "react";
interface Values {
    prevSlide : () => void,
    nextSlide : () => void
}


export const  Arrows : FC<Values> = ({ prevSlide, nextSlide }) => {
    return (
        <div className="arrows" >
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
            <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
        </div>
    );
}

