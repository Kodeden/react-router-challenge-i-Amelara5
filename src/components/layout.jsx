import { Outlet } from "react-router-dom";
import NavBar from "./header/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
