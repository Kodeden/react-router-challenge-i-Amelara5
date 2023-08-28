import { Link } from "react-router-dom";

function editButton() {
  return (
    <Link to={"/add-edit"}>
      <button className="menuButton">Edit</button>
    </Link>
  );
}

export default editButton;
