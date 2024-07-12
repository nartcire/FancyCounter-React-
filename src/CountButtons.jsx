import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount }) {
  return (
    <div className="button-container">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="count-btn"
      >
        <MinusIcon className="count-btn-icon" />
      </button>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="count-btn"
      >
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
