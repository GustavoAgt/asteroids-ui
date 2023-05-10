import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const SortSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  & > button {
    margin-bottom: 1.5rem;
  }
  & > span {
    margin: 1.5rem 0;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: auto;

    & > button {
      margin-right: 1.5rem;
      margin-bottom: 0;
    }
    & > span {
      margin: 0 7rem 0 7rem;
    }
  }
`;

const SortSection: FC<PropsWithChildren> = ({ children }) => {
  return <SortSectionContainer>{children}</SortSectionContainer>;
};

export default SortSection;
