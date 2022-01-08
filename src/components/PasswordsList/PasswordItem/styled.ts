import styled from "styled-components";

export const PasswordItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  margin: 1rem;

  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  background: ${({ theme }) => theme.gradientColor.secondary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.secondary.linearGradient};
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 1rem;
  background-color: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MiddleContainer = styled.div`
  width: 95%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomContainer = styled.div`
  width: 95%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PasswordItemTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  width: 6rem;
  h3 {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const Password = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  min-width: 12rem;
  background-color: ${({ theme }) => theme.palette.light.main};

  p {
    margin: 0.3rem;
  }
`;

export const RemovePasswordButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.1rem 0 0;
`;

export const RemoveButton = styled.button`
  height: ${({ theme }) => theme.buttonSize.iconHeight};
  width: ${({ theme }) => theme.buttonSize.iconWidth};
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  color: ${({ theme }) => theme.palette.info.dark};
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.optional.linearGradient};
  font-weight: 600;
`;

export const ShowPasswordContainer = styled.div`
  min-width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CreatedAtContainer = styled.div`
  background-color: none;
  text-align: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    opacity: 0.6;
  }
`;

export const Dot = styled.div`
  display: flex;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: black;
  margin-left: 4px;
  padding: 0;
`;
