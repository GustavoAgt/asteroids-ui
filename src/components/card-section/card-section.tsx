import styled from "@emotion/styled";
import { FC, PropsWithChildren, ReactNode } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(39.5rem, 1fr));

  column-gap: 1rem;
  row-gap: 2rem;
  justify-items: center;
  width: 98%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(38rem, 1fr));
  }
`;

type Props = {};

const CardSection: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardSection;
