import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const Container = styled.div`
  display: flex;
  padding: 0 4rem;
  margin: 2.5rem 0;

  & > button:first-of-type {
    margin-right: 1rem;
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
`;

const ButtonContainer: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ButtonContainer;
