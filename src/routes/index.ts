import { createBrowserRouter } from "react-router";
import Login from "../components/pages/login";

// router
const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
]);

export default router;
