import { createContext, useState } from "react";
import { AuthenticationService } from "../../../../shared/services/authentication.service";
import { User } from "../../../../models/user";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [user, setUser] = useState<User | null>(null);

  let signIn = async (username: string, password: string): Promise<User> => {
    const u = await AuthenticationService.signIn(username, password);
    setUser(u);
    return u;
  };

  let signOut = async (): Promise<void> => {
    await AuthenticationService.signOut();
    setUser(null);
  };

  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
