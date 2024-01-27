import React from "react";
import { useState } from "react";
const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count1 = {count1}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Mathura</h3>
      <h3>contact: @Lalitchdary01</h3>
    </div>
  );
};
export default User;
