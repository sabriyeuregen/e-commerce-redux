import { useState } from "react";
import "./ImageSlider.scss";
const ImageSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStyles = {
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity:"0.9",
    
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${props.slides[currentIndex].url})`,
  };

  return (
    <div className="sliderStyles">
      <div className="leftArrowStyle" onClick={goToPrevious}>
        ↢
      </div>
      <div className="rightArrowStyle" onClick={goToNext}>
        ↣
      </div>
      <div style={slideStylesWidthBackground}></div>
    </div>
  );
};

export default ImageSlider;
