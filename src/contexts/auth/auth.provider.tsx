import { useState, type ReactNode } from "react";
import { AuthContext } from "./auth.context";
import type { SessionPayload } from "@/types/user.type";

// AuthContext provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  let initialSession: SessionPayload | null = null;

  // get the session from local storage
  const sessionStringified = localStorage.getItem("session");

  // if stringified session found
  if (sessionStringified) {
    initialSession = JSON.parse(sessionStringified);
  }

  const [session, setSession] = useState<SessionPayload | null>(initialSession);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};
