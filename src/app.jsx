import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Error from "./components/error";
import Layout from "./components/layout";
import Index from "./pages/index";

import userInformation from "./pages/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      loader={userInformation}
      errorElement={<Error />}
    >
      <Route index element={<Index />} loader={userInformation} />
      <Route path="user/:id" element={<Index />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
