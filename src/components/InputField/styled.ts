import styled from "styled-components";

export const Input = styled.input`
  width: 70%;
  height: 3rem;
  font-size: 1.5rem;
  margin: 0.3rem 0 0.3rem 0;
  padding: 0 1rem;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 2px solid transparent;
  border-radius: 8px 8px 0 0;

  &::placeholder {
    color: ${({ theme }) => theme.palette.light.dark};
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(43, 103, 119);
  }
`;

export const ShowPasswordButton = styled.button`
  border: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.info.main};
  font-size: 0.8rem;
`;
