import React, { useState, useContext } from "react";
import axios from "axios";

import { IPassword } from "../../../interfaces/IPassword";

import { UserContext } from "../../../contexts/userContext";
import { PasswordContext } from "../../../contexts/passwordContext";

import copyToClipboard from "../../../utils/copyToClipboard";

import {
  PasswordItemContainer,
  PasswordItemTitle,
  Password,
  RemovePasswordButtonContainer,
  RemoveButton,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  CreatedAtContainer,
  ShowPasswordContainer,
  Dot,
  PasswordContainer,
  CopyButtonContainer,
} from "./styled";

type PasswordItemProps = {
  password: IPassword;
};

const PasswordItem: React.FC<PasswordItemProps> = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userState, setUserState] = useContext<any>(UserContext);
  const [passwordsState, setPasswordsState] = useContext<any>(PasswordContext);

  const handleDelete = async () => {
    const reqData = {
      _id: password._id,
      userID: password.userID,
    };
    const { data } = await axios.delete(
      "http://localhost:5002/password/delete",
      {
        data: reqData,
      }
    );

    setPasswordsState(data.data.passwords);
  };

  return (
    <PasswordItemContainer>
      <TopContainer>
        <RemovePasswordButtonContainer>
          <RemoveButton onClick={() => handleDelete()}>X</RemoveButton>
        </RemovePasswordButtonContainer>
      </TopContainer>
      <MiddleContainer>
        <PasswordItemTitle>
          <h3>{password.title}</h3>
        </PasswordItemTitle>
        <PasswordContainer>
          <Password>
            {showPassword ? (
              <p>{password.password}</p>
            ) : (
              [...password.password].map((value, index) => (
                <Dot key={index}></Dot>
              ))
            )}
          </Password>
          <CopyButtonContainer>
            <button onClick={() => copyToClipboard(password.password)}>
              C
            </button>
          </CopyButtonContainer>
        </PasswordContainer>

        <ShowPasswordContainer>
          <p onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "hide password" : "show password"}
          </p>
        </ShowPasswordContainer>
      </MiddleContainer>
      <BottomContainer>
        <CreatedAtContainer>
          <p>{password.createdAt?.slice(0, 10)}</p>
        </CreatedAtContainer>
      </BottomContainer>
    </PasswordItemContainer>
  );
};

export default PasswordItem;
