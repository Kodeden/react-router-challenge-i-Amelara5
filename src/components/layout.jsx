import { Outlet } from "react-router-dom";
import NavBar from "./nav-bar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
