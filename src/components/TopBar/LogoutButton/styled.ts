import styled from "styled-components";

export const LogoutButtonContainer = styled.div``;

export const Button = styled.button`
  height: ${({ theme }) => theme.buttonSize.mediumHeight};
  width: ${({ theme }) => theme.buttonSize.mediumWidth};
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin-right: 1rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  color: ${({ theme }) => theme.palette.light.main};
  font-size: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  background: ${({ theme }) => theme.gradientColor.primary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.primary.linearGradient};

  &:hover {
    border: 1px solid;
  }

  &:active {
    background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
    background: ${({ theme }) => theme.gradientColor.optional.linearGradient};
  }
`;
