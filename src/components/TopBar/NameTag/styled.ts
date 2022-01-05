import styled from "styled-components";

export const NameTagContainer = styled.div`
  height: 3rem;
  background-color: none;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 550;
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
