import React, { useContext } from "react";

import { TopBarContainer } from "./styled";

import LogoutButton from "./LogoutButton/LogoutButton";
import NameTag from "./NameTag/NameTag";

import { UserContext } from "../../contexts/userContext";

const TopBar = () => {
  const [userState, setUserState] = useContext<any>(UserContext);

  return (
    <TopBarContainer>
      <NameTag userName={userState.user.name} />
      <LogoutButton setUserState={setUserState} />
    </TopBarContainer>
  );
};

export default TopBar;
