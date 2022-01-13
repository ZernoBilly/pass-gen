import styled from "styled-components";

type HomeContainerProps = {
  backgroundOpacity: string;
};

export const HomeContainer = styled.div<HomeContainerProps>`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${(props) => props.backgroundOpacity};
`;
