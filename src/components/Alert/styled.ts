import styled from "styled-components";

type AlertContainerProps = {
  color: string;
};

export const AlertContainer = styled.div<AlertContainerProps>`
  height: 4rem;
  width: 10rem;
  background-color: ${(props) =>
    (props.color === "success" && props.theme.palette.success.light) ||
    (props.color === "info" && props.theme.palette.info.light) ||
    (props.color === "warning" && props.theme.palette.warning.light)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 2px solid;
  border-color: ${({ theme }) => theme.palette.primary.dark};
  position: fixed;

  inset: 1rem auto auto 1rem;

  @media ${({ theme }) => theme.mediaQueries.md} {
    height: 3rem;
    width: 6rem;
  }
`;

export const AlertText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.palette.light.main};

  @media ${({ theme }) => theme.mediaQueries.md} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
