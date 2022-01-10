import styled from "styled-components";

export const TitleContainer = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: 550;
    margin-top: 1rem;

    @media ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 2rem;
    }
  }
`;
