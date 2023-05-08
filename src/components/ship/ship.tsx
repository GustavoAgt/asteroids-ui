import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

type Props = {
  color?: string;
  bgColor?: string;
};

const Container = styled("div")<Props>`
  width: max-content;
  text-align: center;
  border-radius: 0.50rem;
  color: ${(props) => props.color};
  padding: 0.25rem;
  background-color: ${(props) => props.bgColor};
`;

const Ship: FC<PropsWithChildren<Props>> = ({ children, color, bgColor }) => {
  if (!children)
    return (
      <Container color="#000" bgColor="#bababa">
        None
      </Container>
    );

  return (
    <Container color={color} bgColor={bgColor}>
      {children}
    </Container>
  );
};

export default Ship;
