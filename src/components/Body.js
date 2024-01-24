import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "/mapi/homepage/getCards?lat=27.4924134&lng=77.673673"
    );

    const json = await data.json();

    setListofRestaurant(json.data.cards[2].thirdCard.data.data.cards);
    setFilteredRestaurant(json.data.cards[2].thirdCard.data.data.cards);
  };
  if (!filteredRestaurant) return null;

  return listofRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="Search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listofRestaurant.filter((res) =>
                res.restaurant.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setlistofRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofRestaurant.filter(
              (res) => res.restaurant.rating > 4.5
            );
            // listofRestaurant = listofRestaurant.filter(
            //   (res) => res.restaurant.rating > 4
            // );
            // console.log(listofRestaurant);
            setlistofRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
