import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const Container = styled.div`
  padding: 0 4rem;
  margin: 2.5rem 0;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonContainer: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default ButtonContainer;
