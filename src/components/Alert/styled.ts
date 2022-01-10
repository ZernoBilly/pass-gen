import styled from "styled-components";

export const AlertContainer = styled.div`
  height: 4rem;
  width: 12rem;
  background-color: ${({ theme }) => theme.palette.success.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  position: fixed;
  inset: auto auto 1rem 1rem;

  @media ${({ theme }) => theme.mediaQueries.md} {
    height: 3rem;
    width: 9rem;
  }
`;

export const AlertText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.palette.light.main};

  @media ${({ theme }) => theme.mediaQueries.md} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
