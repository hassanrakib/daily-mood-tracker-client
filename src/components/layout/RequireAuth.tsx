import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks.ts/user.hook";

export default function RequireAuth() {
  // get the auth from the context
  const auth = useAuth();

  // if no session
  if (!auth.session) {
    return <Navigate to="/login" replace={true} />;
  }

  return <Outlet />;
}
