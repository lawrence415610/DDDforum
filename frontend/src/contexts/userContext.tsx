import React, { createContext, ReactNode, useState } from "react";
import { User } from "../types";

export const UserContext = createContext<{
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}>({
  user: undefined,
  setUser: () => undefined,
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
