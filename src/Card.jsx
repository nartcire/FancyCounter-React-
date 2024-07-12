import { useEffect, useState } from "react";

import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;

        if (newCount > 5) {
          setCount(5);
          return;
        }

        setCount(newCount);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div>
      <div className={`card ${locked ? "card--limit" : ""}`}>
        <Title locked={locked} />
        <Count number={count} />
        <ResetButton setCount={setCount} />
        <ButtonContainer>
          <CountButton
            type="minus"
            setCount={setCount}
            locked={locked}
          ></CountButton>
          <CountButton
            type="plus"
            setCount={setCount}
            locked={locked}
          ></CountButton>
        </ButtonContainer>
      </div>
    </div>
  );
}
