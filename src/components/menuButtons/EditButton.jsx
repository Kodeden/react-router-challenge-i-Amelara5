import { Link } from "react-router-dom";

function EditButton({ user }) {
  return (
    <Link to="/add-edit" state={{ user }} className="menuButton">
      Edit
    </Link>
  );
}

export default EditButton;
