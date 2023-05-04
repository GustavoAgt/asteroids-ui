import styled from "@emotion/styled";
import { PropsWithChildren, ReactNode } from "react";

type InputProps = {
  children: ReactNode;
  position?: {
    absolute: boolean;
    top: string;
    left: string;
    ttop?: string;
    tleft?: string;
  };
  bgColor?: string;
  borderColor?: string;
  color?: string;
  icon?: unknown;
  className?: string;
  checked?: boolean;
  setChecked: (checked: boolean) => void;
};

const CheckContainer = styled.div<InputProps>`
  position: ${(props) => (props.position?.absolute ? "absolute" : "relative")};
  display: flex;
  justify-content: center;
  top: ${(props) => props.position?.top && props.position?.top};
  left: ${(props) => props.position?.top && props.position?.left};
  color: ${(props) => props.color};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  transform: translate(
    ${(props) => (props.position?.tleft ? props.position?.tleft : "")},
    ${(props) => (props.position?.ttop ? props.position?.ttop : "")}
  );
  z-index: 1;
  border: ${(props) =>
    props.borderColor ? "solid 1px " + props.borderColor : "none"};
  text-transform: uppercase;
  padding: 1rem 1rem;
  border-radius: 1rem;
  background-color: rgba(234, 217, 193, 0.5);
  transition: background-color ease-in-out 0.5s;
  display: ${(props) => (props.checked ? "none" : "inherit")};
  &:hover {
    background-color: rgba(234, 217, 193, 0.7);
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0%;
  width: 90%;
  height: 90%;
  z-index: 1;

  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
`;
const Check = (props: PropsWithChildren<InputProps>) => {
  return (
    <CheckContainer {...props}>
      <Input
        id="checkbox"
        type="checkbox"
        checked={props.checked}
        onChange={() => {
          props.setChecked(!props.checked);
        }}
      />
      <label htmlFor="checkbox">{props?.children}</label>
    </CheckContainer>
  );
};

export default Check;
