import React, { useState } from "react";

import { IPassword } from "../../../interfaces/IPassword";

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
} from "./styled";

type PasswordItemProps = {
  password: IPassword;
};

const PasswordItem: React.FC<PasswordItemProps> = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PasswordItemContainer>
      <TopContainer>
        <RemovePasswordButtonContainer>
          <RemoveButton>X</RemoveButton>
        </RemovePasswordButtonContainer>
      </TopContainer>
      <MiddleContainer>
        <PasswordItemTitle>
          <h3>{password.title}</h3>
        </PasswordItemTitle>
        <Password>
          {showPassword ? (
            <p>{password.password}</p>
          ) : (
            [...password.password].map((value, index) => (
              <Dot key={index}></Dot>
            ))
          )}
        </Password>
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
