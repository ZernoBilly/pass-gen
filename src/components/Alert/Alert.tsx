import React from "react";

import { AlertContainer, AlertText } from "./styled";

type AlertProps = {
  type: "success" | "info" | "warning";
  text: string;
};

const Alert: React.FC<AlertProps> = ({ type, text }) => {
  return (
    <AlertContainer color={type}>
      <AlertText>{text}</AlertText>
    </AlertContainer>
  );
};

export default Alert;
