import { Outlet } from "react-router-dom";
import NavBar from "./header/nav-bar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
