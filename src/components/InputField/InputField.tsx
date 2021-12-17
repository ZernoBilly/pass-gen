import React, { useState } from "react";

import { Input, ShowPasswordButton } from "./styled";

type InputFieldProps = {
  type: "email" | "password" | "text";
  label?: string;
};

const InputField: React.FC<InputFieldProps> = ({ type, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

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
      ></Input>
      {type === "password" && (
        <ShowPasswordButton onClick={() => handleClick()}>
          {showPassword ? "Hide password" : "Show password"}
        </ShowPasswordButton>
      )}
    </>
  );
};

export default InputField;
