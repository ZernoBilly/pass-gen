import React from "react";

import { MdOutlineDeleteForever } from "react-icons/md";

type DeleteProps = {
  className?: string;
};

const Delete: React.FC<DeleteProps> = ({ className }) => {
  return (
    <>
      <MdOutlineDeleteForever className={className} />
    </>
  );
};

export default Delete;
