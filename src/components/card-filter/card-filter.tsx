import styled from "@emotion/styled";
import { LegacyRef, ReactNode } from "react";

const Container = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, 10%);
  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 2.5rem 2.5rem;
  height: 50rem;
  width: 55rem;
  border-radius: 1rem;

  animation: position 0.4s ease-out;

  @keyframes position {
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.7;
    }

    0% {
      opacity: 0;
    }
  }
`;

const Title = styled.span`
  font-size: 2.2rem;
  font-weight: 100;
  text-transform: uppercase;
`;

const SubText = styled.span`
  font-size: 1.8rem;
  font-weight: 100;
  text-transform: uppercase;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0;
`;

type Props = {
  children: ReactNode;
  className: string;
};

function CardFilter({ children, className }: Props) {
  return <Container className={className}>{children}</Container>;
}

CardFilter.Title = Title;
CardFilter.DateContainer = DateContainer;
CardFilter.SubText = SubText;

export default CardFilter;
