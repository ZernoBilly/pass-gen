import React, { useState, useEffect } from "react";
import Alert from "../components/Alert/Alert";

type AlertProps = {
  type: "success" | "fail" | "alert" | "info";
  message: string;
};

const useAlert: React.FC<AlertProps> = ({ type, message }) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  return (
    <>
      <Alert />
    </>
  );
};

export default useAlert;
