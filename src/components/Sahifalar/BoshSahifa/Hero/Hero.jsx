import React, { useState } from "react";
import slide from "../../../../assets/imgs/slide.png";
import './Hero.css'

export default function Hero() {
  let [slider, setSlider] = useState("");

  let zeroSliderHandler = () => {
    setSlider("zero");
  };

  let firstSliderHandler = () => {
    setSlider("first");
  };

  let secondSliderHandler = () => {
    setSlider("second");
  };

  let thirdSliderHandler = () => {
    setSlider("third");
  };
  return (
    <div className="hero">
      <div className="slide-container">
        <div
          className={`slider-move-flex${
            slider === "first"
              ? " first"
              : slider === "second"
              ? " second"
              : slider === "third"
              ? " third"
              : slider === "zero"
              ? " zero"
              : null
          }`}
        >
          <div className="div-img">
            <img src={slide} alt="slide" />
            <h2>Temuriylar davri adabiyoti</h2>
          </div>
          <div className="div-img">
            <img src={slide} alt="slide" />
            <h2>Boshqa davr adabiyoti</h2>
          </div>
          <div className="div-img">
            <img src={slide} alt="slide" />
            <h2>Sultoniylar Davr Adabiyoti</h2>
          </div>
          <div className="div-img">
            <img src={slide} alt="slide" />
            <h2>Jaloliddin Davr Adabiyoti</h2>

          </div>
        </div>
      </div>

      <div className="slider-btns">
        <button className="btn" onClick={zeroSliderHandler}></button>
        <button className="btn" onClick={firstSliderHandler}></button>
        <button className="btn" onClick={secondSliderHandler}></button>
        <button className="btn" onClick={thirdSliderHandler}></button>
      </div>

      <div>
      </div>
    </div>
  );
}
