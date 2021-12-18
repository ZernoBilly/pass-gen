import React, { useState } from "react";

import { Input, ShowPasswordButton } from "./styled";

type InputFieldProps = {
  type: "email" | "password" | "text";
  label?: string;
};

const InputField: React.FC<InputFieldProps> = ({ type, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);
  return (
    <>
      <Input
        type={
          type === "password" && !showPassword
            ? "password"
            : type === "password"
            ? "text"
            : type
        }
        placeholder={label}
        onChange={handleChange}
      ></Input>
      {type === "password" && (
        <ShowPasswordButton onClick={() => handleClick()}>
          {!showPassword ? "Show password" : "Hide password"}
        </ShowPasswordButton>
      )}
    </>
  );
};

export default InputField;
