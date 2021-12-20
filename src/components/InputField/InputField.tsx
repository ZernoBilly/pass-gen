import React, { useState } from "react";

import { Input, ShowPasswordButton } from "./styled";

type InputFieldProps = {
  type: "email" | "password" | "name";
  label?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  handleChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
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
        onChange={handleChange}
        name={type}
      ></Input>
      {type === "password" && (
        <ShowPasswordButton onClick={(e) => handleClick(e)}>
          {!showPassword ? "Show password" : "Hide password"}
        </ShowPasswordButton>
      )}
    </>
  );
};

export default InputField;
