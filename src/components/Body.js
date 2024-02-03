import React from "react";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/mapi/homepage/getCards?lat=27.4924134&lng=77.673673"
  //   );

  //   const json = await data.json();

  //   setListofRestaurant(json.data.cards[2].thirdCard.data.data.cards);
  //   setFilteredRestaurant(json.data.cards[2].thirdCard.data.data.cards);
  // };

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (!onlineStatus) {
      // Handle offline state
      console.log("Looks like you're offline!");
    }
  }, [onlineStatus]);

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
          <Link key={index} to={`/restaurants/${index}`}>
            <RestaurantCardPromoted resData={restaurant} />
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
