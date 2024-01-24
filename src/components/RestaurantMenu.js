import React, { useState } from "react";
import { useEffect } from "react";
import { json } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/misc_new/location-features?lat=27.4924134&lng=77.673673&features=CITY_INFO%2CINSTAMART"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return (
    <div>
      <h1>Name of Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
