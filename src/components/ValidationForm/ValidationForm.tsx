import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { dropBarVariants, expandingTransition } from "./animation";
import { UserContext } from "../../contexts/userContext";
import { SIGNUP, LOGIN } from "../../api/api";
import { IUser } from "../../interfaces/IUser";

import {
  FormContainer,
  TopContainer,
  DropBar,
  HeaderContainer,
  HeaderTitle,
  HeaderDescription,
  InputContainer,
  ButtonContainer,
  LoadingMessage,
} from "./styled";

type FormProps = {
  title: string | string[];
  description?: string;
  validationType: string;
  setValidationType: React.Dispatch<React.SetStateAction<string>>;
};

const ValidationForm: React.FC<FormProps> = ({
  title,
  description,
  validationType,
}) => {
  const initInputValues = {
    name: "",
    email: "",
    password: "",
  };
  const [isDropBarExpanded, setIsDropBarExpanded] = useState(false);
  const [inputValues, setInputValues] = useState<IUser>(initInputValues);
  const [state, setState] = useContext(UserContext);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [validationMessage, setValidationMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  // Signup or Login user validation, error handling and animation delays
  const handleClick = async () => {
    let data;
    setIsDropBarExpanded(true);
    setValidationMessage("Validating credentials");
    setTimeout(() => {
      setShowValidationMessage(true);
    }, 200);
    if (validationType === "signup") {
      const { data: signUpData } = await axios.post(SIGNUP, {
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password,
      });
      data = signUpData;
    } else if (validationType === "login") {
      const { data: loginData } = await axios.post(LOGIN, {
        email: inputValues.email,
        password: inputValues.password,
      });
      data = loginData;
    }

    if (data.errors.length) {
      setValidationMessage(data.errors[0].msg);
    }

    setTimeout(() => {
      setIsDropBarExpanded(false);
      setShowValidationMessage(false);
    }, expandingTransition.duration * 1000);

    if (!data.errors.length) {
      localStorage.setItem("token", data.data.token);
      setTimeout(() => {
        navigate("/Home");
      }, expandingTransition.duration * 1000);
    }
  };

  return (
    <FormContainer>
      {showValidationMessage && (
        <LoadingMessage>
          <p>{validationMessage}</p>
        </LoadingMessage>
      )}
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
        {validationType === "signup" && (
          <InputField
            type={"name"}
            label={"Name"}
            handleChange={handleChange}
          />
        )}
        <InputField
          type={"email"}
          label={"Email"}
          handleChange={handleChange}
        />
        <InputField
          type={"password"}
          label={"Password"}
          handleChange={handleChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button type={"submit"} text={"Submit"} handleClick={handleClick} />
      </ButtonContainer>
    </FormContainer>
  );
};

export default ValidationForm;
