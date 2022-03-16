import React, { useState } from "react";

export default function Slider({ images }) {
  let [counter, setCounter] = useState(0);

  const onClickForward = () => {
    if (counter + 1 === images.length) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };
  const onClickBack = () => {
    if (counter - 1 === -1) {
      setCounter(images.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="slider">
      <button
        className="prev"
        onClick={() => {
          onClickBack();
        }}
      >
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.0399 7.78312L39.9199 0.703125L0.359863 40.3031L39.9599 79.9031L47.0399 72.8231L14.5199 40.3031L47.0399 7.78312V7.78312Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        className="next"
        onClick={() => {
          onClickForward();
        }}
      >
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z"
            fill="white"
          />
        </svg>
      </button>

      <img src={images[counter]} alt="house" />
    </div>
  );
}
