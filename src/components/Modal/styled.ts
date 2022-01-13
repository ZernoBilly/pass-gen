import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.gradientColor.info.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.info.linearGradient};
  inset: auto 2rem 1rem 2rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  @media ${({ theme }) => theme.mediaQueries.md} {
    inset: auto 2rem 2rem 2rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    color: ${({ theme }) => theme.palette.light.light};
    margin: 0;
    padding: 0;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 400;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem 0 0.5rem;
`;
