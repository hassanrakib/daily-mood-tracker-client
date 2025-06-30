import { useContext } from "react";
import { AuthContext } from "../contexts/auth/auth.context";
import { useMutation } from "@tanstack/react-query";
import { logIn } from "../services/user.service";
import { queryClient } from "@/main";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be called inside the AuthProvider");
  }

  return context;
};

// login user
export const useLogin = () => {
  return useMutation({
    mutationFn: logIn,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
