import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Outlet />
    </>
  );
}
