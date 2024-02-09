// RestaurantMenu.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCate";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const dispatch = useDispatch;

const handleAddItems = () => {
  //dispatch an action
  dispatch(addItem("pizza"));
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // If resInfo is still null, show a loading message or handle as needed
  if (!resInfo) {
    return <div>Loading...</div>;
  }

  const { name, cuisines, costForTwo, items } = resInfo;

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <div>
          <h1 className="restaurant-name">{name}</h1>
          <h3 className="restaurant-cuisines">{cuisines.join(", ")}</h3>
          <p className="restaurant-cost">{costForTwo}</p>
          <button onClick={handleAddItems}>ADD</button>
        </div>
      </div>

      <h2 className="menu">
        {/* Render RestaurantCategory component here */}
        <RestaurantCategory />
      </h2>

      <ul className="menu-list">
        {items.map((item, index) => (
          <li key={index} className="menu-item">
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
