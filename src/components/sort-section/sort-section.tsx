import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const SortSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  & > button {
    margin-bottom: 1.5rem;
  }
  & > span {
    margin: 1.5rem 0;
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    & > button {
      margin-right: 1.5rem;
      margin-bottom: 0;
    }
    & > span {
      margin: 0 7rem 0 7rem;
    }

    @media (-width: 300px) {
    }
  }
`;

const SortSection: FC<PropsWithChildren> = ({ children }) => {
  return <SortSectionContainer>{children}</SortSectionContainer>;
};

export default SortSection;
