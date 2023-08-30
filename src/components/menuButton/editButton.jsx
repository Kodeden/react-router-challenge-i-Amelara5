import { Link, useOutletContext } from "react-router-dom";

function EditButton({ user }) {
  const [userData, setUserData] = useOutletContext();
  return (
    <Link to={"/add-edit"}>
      <button
        className="menuButton"
        onClick={() => {
          return setUserData(user);
        }}
      >
        Edit
      </button>
    </Link>
  );
}

export default EditButton;
