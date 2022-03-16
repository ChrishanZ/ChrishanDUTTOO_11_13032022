import React from "react";

export default function Banner({ source, sourceMobile }) {
  return (
    <div className="banner">
      <img
        src={source}
        srcSet={`${sourceMobile} 1023w, ${source}`}
        alt="banner"
      />
    </div>
  );
}
