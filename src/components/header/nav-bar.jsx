import { Link } from "react-router-dom";
import AddContact from "./addContact";

function NavBar({ setUserData }) {
  return (
    <>
      <nav className=" mb-6 flex h-20 items-center justify-evenly bg-lime-200 text-rose-400">
        <Link to={"/"} className=" text-xl font-bold text-gray-400">
          Contacts
        </Link>
        <AddContact setUserData={setUserData} />
      </nav>
    </>
  );
}

export default NavBar;
