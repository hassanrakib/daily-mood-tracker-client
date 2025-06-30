import { createBrowserRouter } from "react-router";
import RequireAuth from "@/components/layout/RequireAuth";
import App from "@/App";
import Login from "@/components/pages/login";
import Register from "@/components/pages/register";

// router
const router = createBrowserRouter([
  {
    path: "/",
    Component: RequireAuth,
    children: [
      {
        index: true,
        Component: App,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register
  }
]);

export default router;
