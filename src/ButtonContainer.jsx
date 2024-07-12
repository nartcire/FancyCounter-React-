import CountButton from "./CountButton";

export default function ButtonContainer({ setCount }) {
  return (
    <div className="button-container">
      <CountButton type="minus" setCount={setCount}></CountButton>
      <CountButton type="plus" setCount={setCount}></CountButton>
    </div>
  );
}
