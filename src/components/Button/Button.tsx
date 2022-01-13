import React from "react";

import {
  SubmitButton,
  WarningButton,
  SuccessButton,
  CanselButton,
} from "./styled";

type ButtonProps = {
  type: "submit" | "delete" | "success" | "cansel";
  text: string;
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, text, handleClick }) => {
  return (
    <>
      {(type === "submit" && (
        <SubmitButton type={type} onClick={() => handleClick()}>
          <p>{text}</p>
        </SubmitButton>
      )) ||
        (type === "delete" && (
          <WarningButton type={"button"} onClick={() => handleClick()}>
            <p>{text}</p>
          </WarningButton>
        )) ||
        (type === "success" && (
          <SuccessButton type={"button"} onClick={() => handleClick()}>
            <p>{text}</p>
          </SuccessButton>
        )) ||
        (type === "cansel" && (
          <CanselButton type={"button"} onClick={() => handleClick()}>
            <p>{text}</p>
          </CanselButton>
        ))}
    </>
  );
};

export default Button;
