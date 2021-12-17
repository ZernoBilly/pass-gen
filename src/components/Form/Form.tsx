import React from "react";

import InputField from "../InputField/InputField";

import {
  FormContainer,
  TopContainer,
  BackDrop,
  HeaderContainer,
  HeaderTitle,
  HeaderDescription,
  InputContainer,
} from "./styled";

type FormProps = {
  title: string | string[];
  description?: string;
  type: "signin" | "signup";
};

const Form: React.FC<FormProps> = ({ title, description, type }) => {
  return (
    <FormContainer>
      <TopContainer>
        <BackDrop />
        <HeaderContainer>
          {Array.isArray(title) ? (
            title.map((value) => <HeaderTitle>{value}</HeaderTitle>)
          ) : (
            <HeaderTitle>{title}</HeaderTitle>
          )}
          <HeaderDescription>
            {description ? description : ""}
          </HeaderDescription>
        </HeaderContainer>
      </TopContainer>
      <InputContainer>
        <InputField type={"text"} label={"Name"} />
        <InputField type={"email"} label={"Email"} />
        <InputField type={"password"} label={"password"} />
      </InputContainer>
    </FormContainer>
  );
};

export default Form;
