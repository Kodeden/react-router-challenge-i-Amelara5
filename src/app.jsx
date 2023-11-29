import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "./components/error";
import Layout from "./components/layout";
import { ButtonEvent } from "./pages/actions";
import Home from "./pages/index";
import Loader from "./pages/loaders";
import Profile from "./pages/profile";
import UserInput from "./pages/add-user";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} loader={Loader} />
      <Route
        path="users/:id"
        element={<Profile />}
        loader={Loader}
        action={ButtonEvent}
      />
      <Route path="add-edit" element={<UserInput />} action={ButtonEvent} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
