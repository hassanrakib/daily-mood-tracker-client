import { Navigate } from "react-router";
import { useUser } from "../../hooks.ts/user.hook";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  // get the user from the context
  const user = useUser();

  //   if user loading
  if (user.loading) {
    return <p>Loading...</p>;
  }

  // if no user
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
