import { useContext } from "react";
import { AuthContext } from "../contexts/auth/auth.context";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/user.service";

export const useUser = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useUser must be called inside the AuthProvider");
  }

  return context;
};

// get current user
export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
};
