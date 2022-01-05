import React, { useState } from "react";

import ValidationForm from "../../components/ValidationForm/ValidationForm";

import { MainContainer } from "./styled";

const Validation = () => {
  const [validationType, setValidationType] = useState<string>("login");

  return (
    <MainContainer>
      <ValidationForm
        title={["Welcome", "back"]}
        description={
          validationType === "signup"
            ? "Please create account"
            : "Please sign-in"
        }
        validationType={validationType}
        setValidationType={setValidationType}
      />
    </MainContainer>
  );
};

export default Validation;
