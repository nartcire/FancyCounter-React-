import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  return (
    <button
      onClick={(event) => {
        setCount(0);
        event.currentTarget.blur();
      }}
      className="reset-btn"
    >
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
