import { Link } from "react-router-dom";

function addContact() {
  return (
    <Link
      to={"/add-edit"}
      className="rounded-md bg-blue-700 p-4 font-bold text-white"
    >
      Add Contact
    </Link>
  );
}

export default addContact;
