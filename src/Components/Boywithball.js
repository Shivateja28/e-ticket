import React from "react";
import "./Stadium.css"; // Import your CSS styles

const Boywithball = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
        <defs>
          {/* Define an animation for the ball */}
          <animateMotion id="ballAnimation" dur="3s" repeatCount="indefinite">
            <mpath href="#ballPath" />
          </animateMotion>
        </defs>

        {/* Boy's Body */}
        <circle cx="100" cy="100" r="40" fill="lightblue" />
        <rect x="90" y="100" width="20" height="70" fill="blue" />

        {/* Legs */}
        <line x1="100" y1="170" x2="90" y2="200" stroke="black" strokeWidth="2" />
        <line x1="100" y1="170" x2="110" y2="200" stroke="black" strokeWidth="2" />

        {/* Boy's Head */}
        <circle cx="100" cy="70" r="20" fill="peachpuff" />

        {/* Boy's Face */}
        <circle cx="100" cy="65" r="2" fill="black" />

        {/* Boy's Hair */}
        <circle cx="100" cy="63" r="4" fill="black" />
        <circle cx="104" cy="63" r="4" fill="black" />
        <circle cx="96" cy="63" r="4" fill="black" />

        {/* Ball Path */}
        <path id="ballPath" d="M150 140 Q 130 150, 110 140" fill="transparent" />

        {/* Ball */}
        <circle cx="150" cy="140" r="10" fill="orange">
          <use xlinkHref="#ballAnimation" />
        </circle>

        {/* Boy's Arm */}
        <path d="M100 140 Q 120 130, 150 140" fill="blue" />

        {/* Ground */}
        <rect x="0" y="170" width="200" height="30" fill="green" />
      </svg>
    </div>
  );
};

export default Boywithball;
