import { createContext, type Dispatch, type SetStateAction } from "react";
import type { SessionPayload } from "../../types/user.type";

interface IAuthContext {
  session: SessionPayload | null;
  setSession: Dispatch<SetStateAction<SessionPayload | null>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
