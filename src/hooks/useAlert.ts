import React, { useState } from "react";
import Alert from "../components/Alert/Alert";

const useAlert = (delay: 1 | 2 | 3 | 4) => {
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);

  const funcDelay = delay * 1000;

  const showAlert = () => {
    setIsAlertActive(true);
    setTimeout(() => {
      setIsAlertActive(false);
    }, funcDelay);
  };
  return { isAlertActive, showAlert };
};

export default useAlert;
