import React, { useState, useContext } from "react";

import { IPassword } from "../../../interfaces/IPassword";

import { ModalContext } from "../../../contexts/modalContext";

import copyToClipboard from "../../../utils/copyToClipboard";

import Modal from "../../Modal/Modal";

import Alert from "../../Alert/Alert";

import useAlert from "../../../hooks/useAlert";

import {
  PasswordItemContainer,
  PasswordItemTitle,
  Password,
  RemovePasswordButtonContainer,
  RemoveIcon,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  CreatedAtContainer,
  ShowPasswordContainer,
  Dot,
  PasswordContainer,
  CopyButtonContainer,
  CopyIcon,
} from "./styled";

type PasswordItemProps = {
  password: IPassword;
};

const PasswordItem: React.FC<PasswordItemProps> = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [modalState, setModalState] = useContext(ModalContext);
  const { isAlertActive, showAlert } = useAlert(2);

  const handleDeleteButtonClick = () => {
    const newState = { ...modalState };
    newState.itemToDelete._id = password._id;
    newState.itemToDelete.userID = password.userID;
    newState.isModalOpen = true;

    setModalState(newState);
  };

  return (
    <PasswordItemContainer>
      <TopContainer>
        <PasswordItemTitle>
          <h3>{password.title}</h3>
        </PasswordItemTitle>
        <RemovePasswordButtonContainer
          onClick={() => handleDeleteButtonClick()}
        >
          <RemoveIcon />
        </RemovePasswordButtonContainer>
      </TopContainer>
      <MiddleContainer>
        <PasswordContainer>
          <Password>
            {showPassword ? (
              <p>{password.password}</p>
            ) : (
              [...password.password].map((value, index) => (
                <Dot key={index}></Dot>
              ))
            )}
          </Password>
          <CopyButtonContainer
            onClick={() => {
              copyToClipboard(password.password);
              showAlert();
            }}
          >
            <CopyIcon />
          </CopyButtonContainer>
        </PasswordContainer>
        <ShowPasswordContainer>
          <p onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "hide password" : "show password"}
          </p>
        </ShowPasswordContainer>
      </MiddleContainer>
      <BottomContainer>
        <CreatedAtContainer>
          <p>{password.createdAt?.slice(0, 10)}</p>
        </CreatedAtContainer>
      </BottomContainer>
      {modalState.isModalOpen && (
        <Modal
          type={"deletePassword"}
          text={"Delete password?"}
          buttons={[
            {
              text: "Cansel",
              type: "cansel",
            },
            {
              text: "Delete",
              type: "delete",
            },
          ]}
        />
      )}
      {isAlertActive && <Alert type={"success"} text={"Copied!"} />}
    </PasswordItemContainer>
  );
};

export default PasswordItem;
