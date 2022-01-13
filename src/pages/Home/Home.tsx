import React, { useContext } from "react";

import PasswordsList from "../../components/PasswordsList/PasswordsList";
import TopBar from "../../components/TopBar/TopBar";
import Title from "../../components/Titlle/Title";
import PasswordForm from "../../components/PasswordForm/PasswordForm";
import { StyleContext } from "../../contexts/styleContext";

import { HomeContainer } from "./styled";

const Home = () => {
  const [styleState, setStyleState] = useContext(StyleContext);
  return (
    <HomeContainer backgroundOpacity={styleState.backgroundOpacity}>
      <TopBar />
      <Title />
      <PasswordForm />
      <PasswordsList />
    </HomeContainer>
  );
};

export default Home;
