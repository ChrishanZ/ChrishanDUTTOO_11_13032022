import React from "react";
import { Link, useLocation } from "react-router-dom";

//Import images
import logo from "../images/logo.png";

export default function Header() {
  //J'assigne la loc de la page à la variable location
  //Destructuring pour choisir direct le pathname
  //Usage de split pour avoir le nom du path dans un tableau
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="menu container">
      <Link to="/">
        <a href="https://www.havasfactory.com/" >TEST</a>
        <img src={logo} alt="logo kasa" />
      </Link>
      <ul>
        <li className={splitLocation[1] === "" ? "selected" : ""}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={splitLocation[1] === "propos" ? "selected" : ""}>
          <Link to="propos">A Propos</Link>
        </li>
      </ul>
    </div>
  );
}
