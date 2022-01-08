import React, { useContext, useEffect } from "react";
import axios from "axios";

import { IPassword } from "../../interfaces/IPassword";

import { PasswordsListContainer } from "./styled";

import PasswordItem from "./PasswordItem/PasswordItem";

import { PasswordContext } from "../../contexts/passwordContext";
import { UserContext } from "../../contexts/userContext";

const PasswordsList = () => {
  const [passwordsState, setPasswordsState] = useContext<any>(PasswordContext);
  const [userState, setUserState] = useContext<any>(UserContext);

  const getPasswords = async () => {
    const { data } = await axios.post("http://localhost:5002/password/getall", {
      _id: userState.user.id,
    });

    setPasswordsState(data.data.passwords);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  return (
    <PasswordsListContainer>
      {passwordsState.length &&
        passwordsState.map((value: IPassword, index: number) => (
          <PasswordItem key={index} password={value} />
        ))}
    </PasswordsListContainer>
  );
};

export default PasswordsList;
