import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/layout";
import Index from "./pages/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="user/:id" element={<Index />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
