import React from "react";

import { SubmitButton } from "./styled";

type ButtonProps = {
  type: "submit";
  text: string;
};

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return <>{type === "submit" && <SubmitButton>{text}</SubmitButton>}</>;
};

export default Button;
