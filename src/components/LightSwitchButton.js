import { useState } from "react";
const LightSwitchButton = (props) => {
    const [light, setLight] = useState("off");
  return (
    <button onClick={()=>setLight(light==="on"?"off":"on")} className="LightSwitchButton">
      {/* When the state is on */}
     {light==="on" &&<span>
        <i>💡</i> I'm on!
      </span>} 
      {/* When the state is off */}
      {light==="off" && <span className="off">
        <i>💡</i> I'm off!
      </span>}
    </button>
  );
};
export default LightSwitchButton;
