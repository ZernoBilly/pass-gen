import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 77%;
  height: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.gradientColor.primary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.primary.linearGradient};
  color: ${({ theme }) => theme.palette.light.light};
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    border: 1px solid;
  }

  &:active {
    background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
    background: ${({ theme }) => theme.gradientColor.optional.linearGradient};
  }
`;
