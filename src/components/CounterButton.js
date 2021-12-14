import { useState } from "react";
const CounterButton = (props) => {
  const handelClick = () => setClickAmount(clickAmount + 1);

  const [clickAmount, setClickAmount] = useState(0);
  return (
    <button onClick={handelClick} className="CounterButton">
      You clicked me {clickAmount} times
    </button>
  );
};

export default CounterButton;
