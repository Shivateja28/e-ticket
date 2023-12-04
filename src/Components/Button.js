import React, { useState } from "react";
import "./Match.css"; // Import your CSS styles
import { TbBuildingStadium } from "react-icons/tb";

const Button = (state) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async() => {
    setIsClicked(true);
    console.log();
    state.book();
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
    
  };

  return (
    <button
      className={`animated-button ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {isClicked ? <TbBuildingStadium color = "white"/> : "Click me"}
    
    
    </button>

  );
};

export default Button;
