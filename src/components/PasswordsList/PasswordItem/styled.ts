import styled from "styled-components";
import CopyToClipboard from "../../Icons/CopyToClipboard";
import Delete from "../../Icons/Delete";

export const PasswordItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.palette.optional.light};
  margin: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  /* background: ${({ theme }) => theme.gradientColor.optional.backgroundColor};
  background: ${({ theme }) => theme.gradientColor.optional.linearGradient}; */

  @media ${({ theme }) => theme.mediaQueries.md} {
    width: 25rem;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 1rem;
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const MiddleContainer = styled.div`
  width: 95%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const BottomContainer = styled.div`
  width: 95%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PasswordItemTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  width: 6rem;
  margin: 1rem 0 0 0.7rem;
  h3 {
    color: ${({ theme }) => theme.palette.light.light};
    font-weight: 550;

    @media ${({ theme }) => theme.mediaQueries.md} {
      font-size: ${({ theme }) => theme.fontSize.medium};
    }
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Password = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  min-width: 13rem;
  background-color: ${({ theme }) => theme.palette.light.main};

  p {
    margin: 0.3rem;
  }
`;

export const CopyButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.light.main};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.light.dark};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.light.dark};
    border-color: ${({ theme }) => theme.palette.success.main};
  }
`;

export const CopyIcon = styled(CopyToClipboard)`
  margin: 0;
  padding: 0;
  height: 2rem;
  width: 1.3rem;
`;

export const RemovePasswordButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0.5rem 0 0 0;
  padding: 0;
  height: 1.5rem;
  width: 1.3rem;
  border-radius: 0.2rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.optional.dark};
  }
`;

export const RemoveIcon = styled(Delete)`
  margin: 0;
  padding: 0;
  height: 1.8rem;
  width: 1.3rem;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const ShowPasswordContainer = styled.div`
  min-width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.palette.primary.dark};
    text-decoration: underline;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      transform: scale(1.08);
    }

    &:active {
      color: ${({ theme }) => theme.palette.success.main};
      font-weight: 600;
    }
  }
`;

export const CreatedAtContainer = styled.div`
  background-color: none;
  text-align: center;
  margin-bottom: 1rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    opacity: 0.8;
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const Dot = styled.div`
  display: flex;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: black;
  margin-left: 5px;
  padding: 0;
`;
