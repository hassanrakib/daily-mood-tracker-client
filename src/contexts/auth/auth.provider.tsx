import { useEffect, useState, type ReactNode } from "react";
import type { User } from "../../types/user.type";
import { AuthContext } from "./auth.context";
import { useGetCurrentUser } from "../../hooks.ts/user.hook";

// AuthContext provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // get current user
  const { data: currentUser } = useGetCurrentUser();

  useEffect(() => {
    // set loading to true
    setLoading(true);
    // set user
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }

    // finally set loading
    setLoading(false);
  }, [loading, currentUser]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
