import React from "react";

import PasswordsList from "../../components/PasswordsList/PasswordsList";
import TopBar from "../../components/TopBar/TopBar";
import Title from "../../components/Titlle/Title";

import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <TopBar />
      <Title />
      <PasswordsList />
    </HomeContainer>
  );
};

export default Home;
