import { useState } from "react";

const AngryButton = (props) => {
    
  const [anger, setAnger] = useState(0);

  //More readable way
  const handelClick = () => setAnger(anger < 1 ? anger + 0.1 : 0);

  return (
    <button
      onClick={handelClick}
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      className="AngryButton"
    >
      {/* When the threshold is not reached */}
      {anger < 1 && <span>Don't click me too much! </span>}
      {/* When the threshold is not reached */}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
};

export default AngryButton;
