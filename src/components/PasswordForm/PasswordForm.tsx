import React, { useState, useContext } from "react";
import axios from "axios";

import Button from "../Button/Button";
import Alert from "../Alert/Alert";

import useAlert from "../../hooks/useAlert";

import { UserContext } from "../../contexts/userContext";
import { PasswordContext } from "../../contexts/passwordContext";

import { slideBarVariants, expandingTransition } from "./animations";

import { CREATE_PASSWORD } from "../../api/api";

import {
  PasswordFormContainer,
  SlideBar,
  TitleContainer,
  PasswordActionsContainer,
  Header,
  HeaderContainer,
  InputFieldContainer,
  InputField,
  SelectContainer,
  ButtonContainer,
  InputButtonContainer,
  Label,
  TextField,
  ActionsContainer,
  SelectButtonContainer,
  SelectButton,
} from "./styled";

type InputValues = {
  title: string;
  amount: number;
  numbers: boolean;
  symbols: boolean;
};

const initValues = {
  title: "",
  amount: 8,
  numbers: false,
  symbols: false,
};

const initTitleText = "Create new password";

const PasswordForm = () => {
  const [inputValues, setInputValues] = useState<InputValues>(initValues);
  const [userState, setUserState] = useContext<any>(UserContext);
  const [passwordsState, setPasswordsState] = useContext<any>(PasswordContext);
  const [isSlideBarExpanded, setIsSlideBarExpanded] = useState(false);
  const [titleText, setTitleText] = useState<string>(initTitleText);
  const { isAlertActive, showAlert } = useAlert(2);

  const changeAmount = (value: number) => {
    const newValue = inputValues.amount + value;
    //Limited the amount between 5 and 15
    if (newValue < 5) {
      setInputValues({ ...inputValues, amount: 5 });
    } else if (newValue > 15) {
      setInputValues({ ...inputValues, amount: 15 });
    } else {
      setInputValues({ ...inputValues, amount: newValue });
    }
  };

  const handleCheckbox = (e: any, value: boolean) => {
    const newValue = !value;
    setInputValues({
      ...inputValues,
      [e.target.name]: newValue,
    });
  };

  const handleTitleInput = (e: any) => {
    if (e.target.value.length < 12) {
      setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    }
  };

  const handleCreatePassword = async () => {
    setIsSlideBarExpanded(true);
    if (!inputValues.title) {
      setTitleText("Invalid title!");
      setTimeout(() => {
        setIsSlideBarExpanded(false);
        setTitleText(initTitleText);
      }, expandingTransition.duration * 1000);
    } else {
      setTitleText("Creating password");

      const { data } = await axios.post(CREATE_PASSWORD, {
        _id: userState.user.id,
        title: inputValues.title,
        password: {
          length: inputValues.amount,
          hasNumbers: inputValues.numbers,
          hasSymbols: inputValues.symbols,
        },
        tag: inputValues.title,
      });

      setTimeout(() => {
        setIsSlideBarExpanded(false);
        setTitleText(initTitleText);
        setPasswordsState(data.data.passwords);
        setInputValues(initValues);
        showAlert();
      }, expandingTransition.duration * 1000);
    }
  };

  return (
    <PasswordFormContainer>
      <TitleContainer>
        <SlideBar
          initial={false}
          animate={isSlideBarExpanded ? "expanded" : "collapsed"}
          variants={slideBarVariants}
          transition={expandingTransition}
        ></SlideBar>
        <HeaderContainer>
          <Header>{titleText}</Header>
        </HeaderContainer>
      </TitleContainer>
      <PasswordActionsContainer>
        <InputFieldContainer>
          <TextField
            placeholder="Title"
            name="title"
            value={inputValues.title}
            onChange={(e) => handleTitleInput(e)}
          />
        </InputFieldContainer>
        <ActionsContainer>
          <InputField>
            <p>{inputValues.amount}</p>
            <InputButtonContainer>
              <button onClick={() => changeAmount(+1)}>+</button>
              <button onClick={() => changeAmount(-1)}>-</button>
            </InputButtonContainer>
          </InputField>
          <SelectContainer>
            <SelectButtonContainer>
              <SelectButton
                type={"checkbox"}
                name="numbers"
                checked={inputValues.numbers}
                onClick={(e) => handleCheckbox(e, inputValues.numbers)}
              ></SelectButton>
              <Label>
                <p>Numbers</p>
              </Label>
            </SelectButtonContainer>
            <SelectButtonContainer>
              <SelectButton
                type={"checkbox"}
                name="symbols"
                checked={inputValues.symbols}
                onClick={(e) => handleCheckbox(e, inputValues.symbols)}
              ></SelectButton>
              <Label>
                <p>Symbols</p>
              </Label>
            </SelectButtonContainer>
          </SelectContainer>
        </ActionsContainer>

        <ButtonContainer>
          <Button
            type="submit"
            text="Create"
            handleClick={handleCreatePassword}
          />
        </ButtonContainer>
      </PasswordActionsContainer>
      {isAlertActive && <Alert type={"info"} text={"Created!"} />}
    </PasswordFormContainer>
  );
};

export default PasswordForm;
