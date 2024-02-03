import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure properties from resData.restaurant
  const { name, cuisine, rating, deliveryTime } = resData?.restaurant;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* Correct the image source */}
      <img alt="res-logo" className="res-logo" src={resData.restaurant.img} />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted-card">
        <label className="label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
