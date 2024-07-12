import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card">
        <Title />
        <Count number={count} />
        <ResetButton setCount={setCount} />
        <ButtonContainer setCount={setCount} />
      </div>
    </div>
  );
}
