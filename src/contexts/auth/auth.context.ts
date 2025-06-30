import { createContext, type Dispatch, type SetStateAction } from "react";
import type { User } from "../../types/user.type";

interface IAuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
