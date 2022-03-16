import React, { useState } from "react";

export default function Bigdropdown({ title, description }) {
  const [dropDownview, setDropdownview] = useState(false);
  return (
    <div className="big-dropdown">
      <div className="big-dropdown-header">
        <h2>{title}</h2>
        <button
          onClick={() => {
            setDropdownview(!dropDownview);
          }}
        >
          {!dropDownview ? (
            <svg
              width="28"
              height="17"
              viewBox="0 0 28 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.15993 0.653343L0.799927 3.02668L13.9999 16.2133L27.1999 3.01335L24.8399 0.653343L13.9999 11.4933L3.15993 0.653343Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="17"
              viewBox="0 0 28 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8401 16.3467L27.2001 13.9733L14.0001 0.786651L0.800071 13.9867L3.16007 16.3467L14.0001 5.50665L24.8401 16.3467V16.3467Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>
      {dropDownview && (
        <div className="big-dropdown-description dropdownOpened">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
