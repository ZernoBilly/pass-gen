import React from "react";

import { NameTagContainer } from "./styled";

type NameTagProps = {
  userName: string;
};

const NameTag: React.FC<NameTagProps> = ({ userName }) => {
  return (
    <NameTagContainer>
      <p>Welcome {userName}</p>
    </NameTagContainer>
  );
};

export default NameTag;
