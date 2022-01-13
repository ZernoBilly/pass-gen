import React, { createContext, useState } from "react";

type ModalContexProps = {
  isModalOpen: boolean;
  itemToDelete: {
    _id: string | null;
    userID: string | null;
  };
};

const initState = {
  isModalOpen: false,
  itemToDelete: {
    _id: null,
    userID: null,
  },
};

const ModalContext = createContext<
  [ModalContexProps, React.Dispatch<React.SetStateAction<ModalContexProps>>]
>([initState, () => {}]);

const ModalProvider = ({ children }: any) => {
  const [modal, setModal] = useState<ModalContexProps>(initState);

  return (
    <ModalContext.Provider value={[modal, setModal]}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
