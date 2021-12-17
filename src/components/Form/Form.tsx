import React, { useState } from "react";

import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import {
  FormContainer,
  TopContainer,
  DropBar,
  HeaderContainer,
  HeaderTitle,
  HeaderDescription,
  InputContainer,
  ButtonContainer,
} from "./styled";

type FormProps = {
  title: string | string[];
  description?: string;
  type: "signin" | "signup";
};

const Form: React.FC<FormProps> = ({ title, description, type }) => {
  const [isDropBarExpanded, setIsDropBarExpanded] = useState(false);

  const dropBarVariants = {
    expanded: {
      width: "200%",
      height: "65rem",
      borderRadius: "20%",
      transform: "rotate(-5deg)",
      top: "-5rem",
    },
    collapsed: {
      width: "200%",
      height: "50rem",
      borderRadius: "50%",
      transform: "rotate(-5deg)",
    },
  };

  const expandAnimation = () => {
    setIsDropBarExpanded(true);
    setTimeout(() => {
      setIsDropBarExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const expandingTransition = {
    type: "spring",
    duration: 2.2,
    stiffness: 30,
  };

  return (
    <FormContainer>
      <TopContainer>
        <DropBar
          initial={false}
          animate={isDropBarExpanded ? "expanded" : "collapsed"}
          variants={dropBarVariants}
          transition={expandingTransition}
        />
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
        {type === "signup" && <InputField type={"text"} label={"Name"} />}
        <InputField type={"email"} label={"Email"} />
        <InputField type={"password"} label={"Password"} />
      </InputContainer>
      <ButtonContainer>
        <Button type={"submit"} text={"Submit"} />
        <p onClick={() => expandAnimation()}>click me</p>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
