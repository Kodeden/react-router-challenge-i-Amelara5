import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to={"/"} className="menuButton">
      Back
    </Link>
  );
}

export default BackButton;
