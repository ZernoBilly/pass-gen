import styled from "styled-components";
import { motion } from "framer-motion";

export const FormContainer = styled.div`
  height: 98vh;
  min-height: 45rem;
  width: 30rem;
  //min-width: 20rem;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.palette.light.main};
  box-shadow: ${({ theme }) => theme.boxShadow.small};

  @media ${({ theme }) => theme.mediaQueries.md} {
    height: 45rem;
    width: 25rem;
    margin: 1rem;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2rem 0 2rem;
  padding-bottom: 5rem;
`;

export const DropBar = styled(motion.div)`
  width: 200%;
  min-width: 50rem;
  height: 50rem;
  position: absolute;
  border-radius: 50%;
  top: -28rem;
  left: -18rem;
  transform: rotate(-5deg);
  background: ${({ theme }) => theme.gradientColor.primary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.primary.linearGradient};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.light.light};
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.34;
  z-index: 10;
`;

export const HeaderDescription = styled.p`
  margin: 3rem 0 0 0;
  color: ${({ theme }) => theme.palette.light.main};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.14;
  z-index: 10;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const LoadingMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

export const ChangeValidationType = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.warning.main};
  text-decoration: underline;
  cursor: pointer;
`;
