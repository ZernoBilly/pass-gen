import React from "react";

import { SubmitButton } from "./styled";

type ButtonProps = {
  type: "submit";
  text: string;
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, text, handleClick }) => {
  return (
    <>
      {type === "submit" && (
        <SubmitButton type={type} onClick={handleClick}>
          {text}
        </SubmitButton>
      )}
    </>
  );
};

export default Button;
