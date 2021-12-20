import SliderContent from "./SliderContent";
import classes from "./Slider.module.css";
import formSlider from "./formSlider";
import NavigationSlider from "./NavigationSlider";
import Navigation from "../Header/Navigation";
import { useState } from "react";
const Slider = (prpos) => {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className={classes["slider-container"]}>
      <NavigationSlider
        activeIndex={activeIndex}
        formSlider={formSlider}
        onClick={(activeIndex)=>{setActiveIndex(activeIndex)}}
      />
      <SliderContent activeIndex={activeIndex} formSlider={formSlider} />
    </div>
  );
};
export default Slider;
