import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />} />)
);
function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />{" "}
    </>
  );
}

export default App;
