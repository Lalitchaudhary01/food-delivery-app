import React, { useState, useEffect } from "react";
import menuList from "../utils/mockdataa";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(menuList);
  const { resId } = useParams();

  // If you plan to use useEffect to fetch data, uncomment the following block
  /*
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/misc_new/location-features?lat=27.4924134&lng=77.673673&features=CITY_INFO%2CINSTAMART"
      );

      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  */
  const { name, cuisines, costForTwo, items } = resInfo[0]?.info;

  return (
    <div>
      {/* Assuming you want to display the name of the first restaurant */}
      <h1>{name}</h1>

      <h3>{cuisines.join(", ")}</h3>
      <p>{costForTwo}</p>
      <h2>Menu</h2>
      <ul>
        {/* Assuming you want to display a simple menu */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
