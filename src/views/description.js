import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";

//Import composants
import Slider from "../components/Slider";
import Tag from "../components/Tag";

export default function Description() {
  const location = useLocation();
  if (!location.state) {
    return <Navigate to="/error" />;
  }
  const { from } = location.state;

  let stars = 5;
  let rating = from.rating;
  let restants = stars - rating;
  const list = [];

  for (let j = 0; j < rating; j++) {
    list.push(
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={"j" + j}
      >
        <path
          d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
          fill="#FF6060"
        />
      </svg>
    );
  }
  for (let i = 0; i < restants; i++) {
    list.push(
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={"i" + i}
      >
        <path
          d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
          fill="#E3E3E3"
        />
      </svg>
    );
  }

  return (
    <div className="description container">
      <div className="description-slider">
        <Slider images={from.pictures} />
      </div>
      <div className="description-content">
        <div className="description-content__upper">
          <div className="description-content__upper__left">
            <h2>{from.title}</h2>
            <h3>{from.location}</h3>
            <div className="tags">
              {from.tags.map((elem) => {
                return <Tag key={elem} title={elem} />;
              })}
            </div>
          </div>
          <div className="description-content__upper__right">
            <div className="profile">
              <h3>{from.host.name}</h3>
              <div className="image">
                <img src={from.host.picture} alt="profile" />
              </div>
            </div>
            <div className="stars">{list}</div>
          </div>
        </div>
        <div className="description-content__lower">
          <Dropdown title={"Description"} description={from.description} />
          <Dropdown title={"Équipements"} equipments={from.equipments} />
        </div>
      </div>
    </div>
  );
}
