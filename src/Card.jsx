import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  return (
    <div>
      <div>
        <Title />
        <Count number={5} size="lg" />
        <ResetButton />
        <CountButtons />
      </div>
    </div>
  );
}
