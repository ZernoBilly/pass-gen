import React from "react";

import { IPassword } from "../../../interfaces/IPassword";

import {
  PasswordItemContainer,
  PasswordItemTitle,
  passwordItemDate,
  Password,
  RemovePasswordButton,
} from "./styled";

type PasswordItemProps = {
  password: IPassword;
};

const PasswordItem: React.FC<PasswordItemProps> = ({ password }) => {
  return (
    <PasswordItemContainer>
      <PasswordItemTitle>{password.title}</PasswordItemTitle>
      <Password>{password.password}</Password>
      <RemovePasswordButton>Remove</RemovePasswordButton>
    </PasswordItemContainer>
  );
};

export default PasswordItem;
