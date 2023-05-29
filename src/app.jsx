import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Error from "./components/error";
import Layout from "./components/layout";
import Index from "./pages/index";
import Profile from "./pages/profile";

import userInformation from "./pages/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Index />} loader={userInformation} />
      <Route path="users/:id" element={<Profile />} loader={userInformation} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
