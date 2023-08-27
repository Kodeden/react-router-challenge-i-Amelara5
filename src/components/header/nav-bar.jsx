import AddContact from "./addContact";

function NavBar() {
  return (
    <>
      <nav className=" mb-6 flex h-20 items-center justify-evenly bg-lime-200 text-rose-400">
        <div className=" text-xl font-bold text-gray-400">Contacts</div>
        <AddContact />
      </nav>
    </>
  );
}

export default NavBar;
