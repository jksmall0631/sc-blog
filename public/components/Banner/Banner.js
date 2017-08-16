import React from "react";

require("./Banner.css");

const Banner = () => {
  return (
    <div className="banner">
      <div className="name-cont">
        <h1 className="name">CLEERE</h1>
        <h1 className="name">PUBLISHING</h1>
      </div>
      <h2 className="motto">CREATIVE IMAGERY THROUGH WORDS AND PHOTOS</h2>
    </div>
  );
};

export default Banner;
