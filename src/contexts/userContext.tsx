import React, { createContext, useState } from "react";

import { IUser } from "../interfaces/IUser";

type UserContextProps = {
  user: IUser | null;
  error: string | null;
  loading: boolean;
};

const initState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  error: null,
  loading: false,
};

const UserContext = createContext<
  [UserContextProps, React.Dispatch<React.SetStateAction<UserContextProps>>]
>([initState, () => {}]);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserContextProps>(initState);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
