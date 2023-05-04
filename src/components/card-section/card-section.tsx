import styled from "@emotion/styled";
import { FC, PropsWithChildren, ReactNode } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  row-gap: 2rem;
  column-gap: 2rem;
  margin-top: 5%;
`;

type Props = {};

const CardSection: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardSection;
