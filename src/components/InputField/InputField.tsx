import React from "react";

import { Input } from "./styled";

type InputFieldProps = {
  type: "email" | "password" | "text";
  label?: string;
};

const InputField: React.FC<InputFieldProps> = ({ type, label }) => {
  return <Input type={type} placeholder={label}></Input>;
};

export default InputField;
