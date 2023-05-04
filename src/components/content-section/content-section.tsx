import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

type Props = {};

const ContentSection: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentSection;
