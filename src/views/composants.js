import React from "react";
//Composants
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import Bigdropdown from "../components/Bigdropdown";
import Thumb from "../components/Thumb";
import Slider from "../components/Slider";

export default function Composants() {
  return (
    <div>
      <h1>Composants</h1>
      <Tag />
      <Thumb />
      <Dropdown />
      <Bigdropdown />
      <Slider />
    </div>
  );
}
