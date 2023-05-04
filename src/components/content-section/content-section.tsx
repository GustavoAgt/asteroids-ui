import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;


  @media (min-width: 1024px) {
    margin-top: 1%;
  }
`;

type Props = {};

const ContentSection: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentSection;
