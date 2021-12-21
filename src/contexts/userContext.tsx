import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { ME } from "../api/api";

import { IUser } from "../interfaces/IUser";

type UserContextProps = {
  user: IUser | null;
  error: string | null;
  loading: boolean;
};

const initState = {
  user: null,
  error: null,
  loading: false,
};

const UserContext = createContext<
  [UserContextProps, React.Dispatch<React.SetStateAction<UserContextProps>>]
>([initState, () => {}]);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserContextProps>(initState);

  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }

  const fetchUser = async () => {
    const { data: response } = await axios.get(ME);

    if (response.data && response.data.user) {
      setUser({
        user: {
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
        },
        error: null,
        loading: false,
      });
    } else if (response.data && response.data.errors.length) {
      setUser({
        user: null,
        error: response.data.errors[0].msg,
        loading: false,
      });
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUser(initState);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
