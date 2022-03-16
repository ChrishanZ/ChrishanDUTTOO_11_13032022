import React, { useState } from "react";
import { Link } from "react-router-dom";

//Import composants
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";

//Import Data
import myData from "../data.json";

//Import images
import BannerSource from "../images/bannerHomepage.png";

export default function Homepage() {
  const [houses, setHouses] = useState(myData);

  return (
    <div className="homepage">
      <Banner source={BannerSource} />
      <div className="homepage-cards">
        {houses.map((house) => {
          return (
            <Link
              to={"/model/" + house.id}
              state={{ from: house }}
              key={house.id}
            >
              <Thumb image={house.cover} title={house.title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
