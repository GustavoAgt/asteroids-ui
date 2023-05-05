import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const SortSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;

    & > span {
      margin: 0 7rem 0 7rem;
    }
  }
`;

const SortSection: FC<PropsWithChildren> = ({ children }) => {
  return <SortSectionContainer>{children}</SortSectionContainer>;
};

export default SortSection;
