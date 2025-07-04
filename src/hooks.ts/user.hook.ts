import { useContext } from "react";
import { AuthContext } from "../contexts/auth/auth.context";
import { useMutation } from "@tanstack/react-query";
import { logIn, registerUser } from "../services/user.service";
import { toaster } from "@/components/ui/toaster";

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
      toaster.create({
        description: "Login successful",
        type: "info",
      });
    },
    onError: (error) => {
      toaster.create({
        description: error.message,
        type: "info",
      });
    },
  });
};

// register user
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toaster.create({
        description: "Registration successful",
        type: "info",
      });
    },
    onError: (error) => {
      toaster.create({
        description: error.message,
        type: "info",
      });
    },
  });
};
