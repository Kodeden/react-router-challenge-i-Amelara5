import { Link } from "react-router-dom";

function addContact({ setUserData }) {
  return (
    <Link to={"/add-edit"}>
      <button
        className="rounded-md bg-blue-700 p-4 font-bold text-white"
        onClick={() => {
          setUserData({});
        }}
      >
        Add Contact
      </button>
    </Link>
  );
}

export default addContact;
