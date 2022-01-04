import React from "react";

import PasswordsList from "../../components/PasswordsList/PasswordsList";

import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <PasswordsList />
    </HomeContainer>
  );
};

export default Home;
