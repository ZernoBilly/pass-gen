import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 77%;
  min-width: 8rem;
  height: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.gradientColor.primary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.primary.linearGradient};
  color: ${({ theme }) => theme.palette.light.light};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
    background: ${({ theme }) => theme.gradientColor.optional.linearGradient};
  }

  p {
    color: ${({ theme }) => theme.palette.light.light};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const WarningButton = styled.button`
  width: 77%;
  min-width: 8rem;
  height: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.gradientColor.warning.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.warning.linearGradient};
  color: ${({ theme }) => theme.palette.light.light};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.warning.main};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.warning.light};
  }

  &:active {
    background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
    background: ${({ theme }) => theme.gradientColor.optional.linearGradient};
  }

  p {
    color: ${({ theme }) => theme.palette.light.light};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const SuccessButton = styled.button`
  width: 77%;
  min-width: 8rem;
  height: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.gradientColor.success.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.success.linearGradient};
  color: ${({ theme }) => theme.palette.light.light};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.info.main};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.success.light};
  }

  &:active {
    background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
    background: ${({ theme }) => theme.gradientColor.optional.linearGradient};
  }

  p {
    color: ${({ theme }) => theme.palette.light.light};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const CanselButton = styled.button`
  width: 77%;
  min-width: 8rem;
  height: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.gradientColor.secondary.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.secondary.linearGradient};
  color: ${({ theme }) => theme.palette.light.light};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.secondary.dark};
  }

  &:active {
    background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
    background: ${({ theme }) => theme.gradientColor.optional.linearGradient};
  }

  p {
    color: ${({ theme }) => theme.palette.primary.dark};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
