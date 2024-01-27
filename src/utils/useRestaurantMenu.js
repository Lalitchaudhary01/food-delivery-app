import { useState, useEffect } from "react";
import menuList from "../utils/mockdataa";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // Convert resId to an integer
    const index = parseInt(resId, 10);

    // Check if the index is valid and fetch the corresponding menu
    if (index >= 0 && index < menuList.length) {
      setResInfo(menuList[index]?.info);
    } else {
      setResInfo(null); // Invalid index, set to null or handle as needed
    }
  }, [resId]);
  return resInfo;
};
export default useRestaurantMenu;

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
