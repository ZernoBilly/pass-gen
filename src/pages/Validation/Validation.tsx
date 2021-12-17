import React from "react";

import Form from "../../components/Form/Form";

import { MainContainer } from "./styled";

const Validation = () => {
  return (
    <MainContainer>
      <Form
        title={["Welcome", "back"]}
        description={"Please sign-in"}
        type={"signin"}
      />
    </MainContainer>
  );
};

export default Validation;
