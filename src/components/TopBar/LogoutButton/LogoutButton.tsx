import React from "react";
import { useNavigate } from "react-router-dom";

import { LogoutButtonContainer, Button } from "./styled";

type LogoutButtonProps = {
  setUserState: ({}) => void;
};

const LogoutButton: React.FC<LogoutButtonProps> = ({ setUserState }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const initState = {
      user: null,
      error: null,
      loading: false,
    };
    setUserState(initState);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <LogoutButtonContainer>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </LogoutButtonContainer>
  );
};

export default LogoutButton;
