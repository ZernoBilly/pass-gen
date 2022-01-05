import React from "react";

import { IPassword } from "../../../interfaces/IPassword";

import {
  PasswordItemContainer,
  PasswordItemTitle,
  passwordItemDate,
  Password,
  RemovePasswordButtonContainer,
  RemoveButton,
} from "./styled";

type PasswordItemProps = {
  password: IPassword;
};

const PasswordItem: React.FC<PasswordItemProps> = ({ password }) => {
  return (
    <PasswordItemContainer>
      <PasswordItemTitle>
        <h3>{password.title}</h3>
      </PasswordItemTitle>
      <Password>
        <p>{password.password}</p>
      </Password>
      <RemovePasswordButtonContainer>
        <RemoveButton>Remove</RemoveButton>
      </RemovePasswordButtonContainer>
    </PasswordItemContainer>
  );
};

export default PasswordItem;
