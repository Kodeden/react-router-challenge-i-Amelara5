import { Outlet } from "react-router-dom";
import NavBar from "./header/nav-bar";

export default function Layout() {
  return (
    <>
      <NavBar />
      {/* <h1 className="text-3xl font-bold underline">TEST</h1> */}
      <Outlet />
    </>
  );
}
