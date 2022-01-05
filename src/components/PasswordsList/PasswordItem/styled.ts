import styled from "styled-components";

export const PasswordItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  margin: 1rem;
  padding: 0 1rem 0 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  background: ${({ theme }) => theme.gradientColor.secondary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.secondary.linearGradient};
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

export const passwordItemDate = styled.p``;

export const Password = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  min-width: 10rem;
  background-color: ${({ theme }) => theme.palette.light.main};

  p {
    margin: 0.3rem;
  }
`;

export const RemovePasswordButtonContainer = styled.div``;

export const RemoveButton = styled.button`
  height: ${({ theme }) => theme.buttonSize.smallHeight};
  width: ${({ theme }) => theme.buttonSize.smallWidth};
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  color: ${({ theme }) => theme.palette.info.dark};
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.optional.linearGradient};
`;
