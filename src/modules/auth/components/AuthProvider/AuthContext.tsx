import { createContext } from "react";
import { User } from "../../../../models/user";

export interface AuthContextType {
  user: User | null;
  signIn: (username: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
}

export let AuthContext = createContext<AuthContextType>(null!);
