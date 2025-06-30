import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks.ts/user.hook";
import { Grid } from "@chakra-ui/react";
import Navbar from "../shared/navbar";

export default function RequireAuth() {
  // get the auth from the context
  const auth = useAuth();

  // if no session
  if (!auth.session) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <Grid px="3" py="5" gap="4" maxW="xl" mx="auto" templateRows="50px 1fr">
      <Navbar />
      <Outlet />
    </Grid>
  );
}
