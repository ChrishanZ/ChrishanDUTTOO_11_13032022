import React from "react";

export default function Banner({ source }) {
  return (
    <div className="banner">
      <img src={source} alt="banner" />
    </div>
  );
}
