import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  onClick: () => void;
  toggleState?: boolean;
};

const Container = styled.div<Props>`
  position: absolute;
  inset: 0;
  opacity: 1;
  z-index: 1;
  ${(props) =>
    props.toggleState
      ? ` visibility: visible;
          transition: all .3s;
          background: rgba(0, 0, 0, 0.4);`
      : `
          visibility: hidden;
      `}
`;

const Overlay: FC<Props> = ({ onClick, toggleState }) => {
  return <Container onClick={onClick} toggleState={toggleState} />;
};

export default Overlay;
