import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 77%;
  text-align: center;
  background: ${({ theme }) => theme.gradientColor.primary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.primary.linearGradient};
  color: ${({ theme }) => theme.palette.light.light};
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: all, 240ms ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;
