import React, { useState, useContext } from "react";
import axios from "axios";

import { IPassword } from "../../../interfaces/IPassword";

import { PasswordContext } from "../../../contexts/passwordContext";

import copyToClipboard from "../../../utils/copyToClipboard";

import { DELETE_PASSWORD } from "../../../api/api";

import {
  PasswordItemContainer,
  PasswordItemTitle,
  Password,
  RemovePasswordButtonContainer,
  RemoveIcon,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  CreatedAtContainer,
  ShowPasswordContainer,
  Dot,
  PasswordContainer,
  CopyButtonContainer,
  CopyIcon,
} from "./styled";

type PasswordItemProps = {
  password: IPassword;
};

const PasswordItem: React.FC<PasswordItemProps> = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsState, setPasswordsState] = useContext<any>(PasswordContext);

  const handleDelete = async () => {
    const reqData = {
      _id: password._id,
      userID: password.userID,
    };
    const { data } = await axios.delete(DELETE_PASSWORD, {
      data: reqData,
    });

    setPasswordsState(data.data.passwords);
  };

  return (
    <PasswordItemContainer>
      <TopContainer>
        <PasswordItemTitle>
          <h3>{password.title}</h3>
        </PasswordItemTitle>
        <RemovePasswordButtonContainer onClick={() => handleDelete()}>
          <RemoveIcon />
        </RemovePasswordButtonContainer>
      </TopContainer>
      <MiddleContainer>
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
          <CopyButtonContainer
            onClick={() => copyToClipboard(password.password)}
          >
            <CopyIcon />
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
