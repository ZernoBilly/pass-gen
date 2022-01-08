import React from "react";

import PasswordsList from "../../components/PasswordsList/PasswordsList";
import TopBar from "../../components/TopBar/TopBar";
import Title from "../../components/Titlle/Title";
import PasswordForm from "../../components/PasswordForm/PasswordForm";

import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <TopBar />
      <Title />
      <PasswordForm />
      <PasswordsList />
    </HomeContainer>
  );
};

export default Home;
