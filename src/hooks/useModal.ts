import React, { useState, useContext } from "react";
import { StyleContext } from "../contexts/styleContext";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [styleState, setStyleState] = useContext(StyleContext);

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setStyleState({ ...styleState, backgroundOpacity: "0.6" });
    } else {
      setIsOpen(false);
      setStyleState({ ...styleState, backgroundOpacity: "1" });
    }
  };

  return { isOpen, toggleModal };
};

export default useModal;
