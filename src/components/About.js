import React from "react";
import User from "./user";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum justo ac massa feugiat, ac luctus ligula lacinia. Ut
          suscipit nisi at est eleifend, sit amet varius justo condimentum.
          Vivamus ac enim vel tortor commodo fermentum. Quisque bibendum euismod
          dolor, a malesuada elit consequat eu. Duis id metus non purus
          fermentum facilisis.
        </p>
        <h2 className="about-subtitle">Meet the Team</h2>
        <div className="team-members">
          <UserClass name={"Lalit ch"} />
          {/* Add more User or UserClass components for each team member */}
        </div>
      </div>
    </div>
  );
};

export default About;
