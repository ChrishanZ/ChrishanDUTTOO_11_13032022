import React from "react";

export default function Thumb({ image, title }) {
  return (
    <div
      className="thumb"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}
