import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Error from "./components/Error";
import Layout from "./components/Layout";
import Index from "./pages";
import Profile from "./pages/Profile";

import userInformation from "./pages/loaders";

import { ButtonEvent } from "./pages/actions";
import UserInput from "./pages/UserInput";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Index />} loader={userInformation} />
      <Route
        path="users/:id"
        element={<Profile />}
        loader={userInformation}
        action={ButtonEvent}
      />
      <Route path="add-edit" element={<UserInput />} action={ButtonEvent} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
