import React from "react";

import logo from "../images/logoWhite.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={logo} alt="Kasa" />
        <h2>© 2020 Kasa. All rights reserved</h2>
      </div>
    </div>
  );
}
