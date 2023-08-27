import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to={"/"}>
      <button
        className="menuButton"
        // onClick={() => {
        //   submit({ value: "back", name: "intent" }, { method: "PATCH" });
        // }}
      >
        Back
      </button>
    </Link>
  );
}

export default BackButton;
