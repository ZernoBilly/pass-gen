import styled from "styled-components";
import { motion } from "framer-motion";

export const PasswordFormContainer = styled.div`
  height: 10rem;
  width: 50%;
  min-width: 25rem;
  max-width: 55rem;
  background-color: ${({ theme }) => theme.palette.optional.main};
  margin: 1rem 0 1rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQueries.md} {
    width: 25rem;
  }
`;

export const TitleContainer = styled.div`
  height: 100%;
  width: 25%;
  background-color: none;
  overflow: hidden;
`;

export const SlideBar = styled(motion.div)`
  width: 100%;
  min-width: 30rem;
  height: 30rem;
  position: absolute;
  border-radius: 50%;
  top: -16rem;
  left: -35rem;
  transform: rotate(-5deg);
  background: ${({ theme }) => theme.gradientColor.primary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.primary.linearGradient};

  @media ${({ theme }) => theme.mediaQueries.md} {
    top: -20rem;
    left: -23.3rem;
  }
`;

export const PasswordActionsContainer = styled.div`
  height: 100%;
  width: 75%;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem 0 0.5rem;
`;

export const Header = styled.h4`
  z-index: 10;
  color: ${({ theme }) => theme.palette.light.light};
  font-weight: 550;

  @media ${({ theme }) => theme.mediaQueries.md} {
    font-size: 0.9rem;
    margin-right: 1rem;
  }
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: none;
  margin-top: 0.1rem;
`;

export const TextField = styled.input`
  width: 15rem;
  height: 2rem;
  font-size: 1.5rem;
  margin: 0;
  padding: 0 1rem;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 2px solid transparent;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${({ theme }) => theme.palette.light.main};
  overflow: scroll;

  &::placeholder {
    color: ${({ theme }) => theme.palette.light.dark};
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(43, 103, 119);
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: none;
`;

export const InputField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  min-width: 4rem;
  background-color: ${({ theme }) => theme.palette.light.main};
  border-radius: 0 0 0 0.5rem;

  p {
    margin-left: 0.8rem;
    font-size: ${({ theme }) => theme.fontSize.large};
    cursor: default;

    @media ${({ theme }) => theme.mediaQueries.md} {
      font-size: 1.3rem;
    }
  }
`;

export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: none;
    cursor: pointer;
  }
`;

export const SelectContainer = styled.div`
  width: 13rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.light.main};
  border-radius: 0 0 0.5rem 0;
`;

export const SelectButtonContainer = styled.div`
  height: 3rem;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectButton = styled.input`
  height: 1rem;
  width: 1rem;
  color: ${({ theme }) => theme.palette.info.main};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
  margin: 1rem 0 0.1rem 0;
`;

export const Label = styled.div`
  height: 1rem;
  width: 100%;
  background-color: none;
  display: flex;
  cursor: default;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
