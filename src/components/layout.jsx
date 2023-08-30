import { Outlet } from "react-router-dom";
import NavBar from "./header/nav-bar";
import { useState } from "react";

export default function Layout() {
  const [userData, setUserData] = useState({});
  return (
    <>
      <NavBar />
      <Outlet context={[userData, setUserData]} />
    </>
  );
}
