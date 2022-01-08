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
  ChangeValidationType,
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
  setValidationType,
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
    let response: any; // Response from API
    setIsDropBarExpanded(true);
    setValidationMessage("Validating credentials");

    //Delay for DropBar animation
    setTimeout(() => {
      setShowValidationMessage(true);
    }, 200);

    // Send input values to API
    if (validationType === "signup") {
      const { data: signUpData } = await axios.post(SIGNUP, {
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password,
      });
      response = signUpData;
    } else if (validationType === "login") {
      const { data: loginData } = await axios.post(LOGIN, {
        email: inputValues.email,
        password: inputValues.password,
      });
      response = loginData;
    }

    //Check errors from API response
    if (response.errors.length) {
      setValidationMessage(response.errors[0].msg);
    }

    //Delay for DropBar animation
    setTimeout(() => {
      setIsDropBarExpanded(false);
      setShowValidationMessage(false);
    }, expandingTransition.duration * 1000);

    //If no errors set userState and navigate to /Home
    if (!response.errors.length) {
      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        setState({
          user: {
            id: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
          },
          error: null,
          loading: false,
        });
        navigate("/Home");
      }, expandingTransition.duration * 1000);

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "authorization"
      ] = `Bearer ${response.data.token}`;
    }
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
            title.map((value, index) => (
              <HeaderTitle key={index}>{value}</HeaderTitle>
            ))
          ) : (
            <HeaderTitle>{title}</HeaderTitle>
          )}
          <HeaderDescription>
            {description ? description : ""}
          </HeaderDescription>
          {showValidationMessage && (
            <LoadingMessage>
              <p>{validationMessage}</p>
            </LoadingMessage>
          )}
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
        <ChangeValidationType
          onClick={() =>
            setValidationType(validationType === "signup" ? "login" : "signup")
          }
        >
          {validationType === "signup"
            ? "Already have account?"
            : "Create account"}
        </ChangeValidationType>
      </ButtonContainer>
    </FormContainer>
  );
};

export default ValidationForm;
