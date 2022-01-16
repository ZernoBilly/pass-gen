import React, { useContext, useRef, useEffect } from "react";
import axios from "axios";

import { PasswordContext } from "../../contexts/passwordContext";
import { ModalContext } from "../../contexts/modalContext";

import { DELETE_PASSWORD } from "../../api/api";

import {
  ModalContainer,
  TopContainer,
  BottomContainer,
  ButtonContainer,
} from "./styled";

import Button from "../Button/Button";

import useClickOutside from "../../hooks/useClickOutside";

interface IButton {
  text: string;
  type: "submit" | "delete" | "success" | "cansel";
}

type ModalProps = {
  type: "deletePassword";
  text: string;
  buttons: IButton[] | [];
};

const Modal: React.FC<ModalProps> = ({ type, text, buttons }) => {
  const [passwordsState, setPasswordsState] = useContext<any>(PasswordContext);
  const [modalState, setModalState] = useContext<any>(ModalContext);

  const ref = useRef<any>(null);

  useClickOutside(ref, () => toggleModal());

  const handleDelete = async () => {
    const reqData = {
      _id: modalState.itemToDelete._id,
      userID: modalState.itemToDelete.userID,
    };
    const { data } = await axios.delete(DELETE_PASSWORD, {
      data: reqData,
    });
    setPasswordsState(data.data.passwords);
    toggleModal();
  };

  const toggleModal = () => {
    setModalState({ ...modalState, isModalOpen: !modalState.isModalOpen });
  };

  return (
    <ModalContainer ref={ref}>
      <TopContainer>
        <p>{text}</p>
      </TopContainer>
      {buttons.length ? (
        <BottomContainer>
          {buttons.map((button, index) => (
            <ButtonContainer>
              <Button
                key={index}
                text={button.text}
                type={button.type}
                handleClick={
                  button.type === "delete" ? handleDelete : toggleModal
                }
              />
            </ButtonContainer>
          ))}
        </BottomContainer>
      ) : null}
    </ModalContainer>
  );
};

export default Modal;
