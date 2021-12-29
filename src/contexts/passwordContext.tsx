import React, { createContext, useState, useEffect } from "react";

import { IPassword } from "../interfaces/IPassword";

type PasswordContextProps = {
  passwords: IPassword[];
};

const initState = {
  passwords: [],
};

const PasswordContext = createContext<
  [
    PasswordContextProps,
    React.Dispatch<React.SetStateAction<PasswordContextProps>>
  ]
>([initState, () => {}]);

const PasswordProvider = ({ children }: any) => {
  const [passwords, setPasswords] = useState<PasswordContextProps>(initState);

  return (
    <PasswordContext.Provider value={[passwords, setPasswords]}>
      {children}
    </PasswordContext.Provider>
  );
};

export { PasswordContext, PasswordProvider };
