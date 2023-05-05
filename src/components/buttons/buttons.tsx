import { FC, PropsWithChildren, ReactNode } from "react";
import styled from "@emotion/styled";

type Props = {
  value: any;
  className?: string;
  type?: "button" | "submit" | undefined;
  disabled?: boolean;
  fontSize?: string;
  marginTop?: string;
  marginBottom?: string;
  width?: string;
  radius?: string;
  others?: object;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  value,
  className,
  type,
  disabled = false,
  fontSize,
  marginTop,
  marginBottom,
  width,
  onClick,
  others,
}) => {
  return (
    <button
      type={type}
      className={`${className}`}
      disabled={disabled}
      onClick={onClick}
      {...others}
    >
      {value}
    </button>
  );
};

const PrimaryButton = styled(Button)<Props>`
  text-transform: uppercase;
  padding: 2rem 3rem;
  border-radius: 1rem;
  font-size: ${(props) => props.fontSize || "1.4rem"};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  color: #ffffff;
  background: linear-gradient(45deg, rgb(234, 217, 193), rgb(235, 130, 124));
  border: none;

  &:focus-visible {
    outline: none;
    transform: scale(1.1);
  }

  &:hover {
    cursor: ${(props) => !props.disabled && "pointer"};
    opacity: 0.9;
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 30px;
    width: ${(props) => props.width || "100%"};
    margin-bottom: 1.5rem;
    font-size: ${(props) => props.fontSize || "14px"};
    &:hover {
      transform: ${(props) => !props.disabled && "scale(1)"};
    }
  }
`;

const SecondaryButton = styled(Button)<Props>`
  text-transform: uppercase;
  padding: 2rem 3rem;
  border-radius: 1rem;
  font-size: ${(props) => props.fontSize || "1.4rem"};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  color: #000;
  transition: all 1.2s ease-out;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: ${(props) => !props.disabled && "pointer"};
    background: linear-gradient(45deg, rgb(234, 217, 193), rgb(235, 130, 124));
    color: #fff;
  }

  &:focus-visible {
    outline: none;
    transform: scale(1.1);
    background: linear-gradient(45deg, rgb(234, 217, 193), rgb(235, 130, 124));
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 30px;
    width: ${(props) => props.width || "100%"};
    margin-bottom: 1.5rem;
    font-size: ${(props) => props.fontSize || "14px"};
    &:hover {
      transform: ${(props) => !props.disabled && "scale(1)"};
    }
  }
`;

type ButtonSimpleProp = {
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
  onClick?: () => void;
};

const SimpleButton = styled(
  ({ children, className, onClick }: PropsWithChildren<ButtonSimpleProp>) => (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
)`
  position: ${(props) => (props.position?.absolute ? "absolute" : "relative")};
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
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: rgba(234, 217, 193, 0.5);
  transition: background-color ease-in-out 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(234, 217, 193, 0.7);
  }
`;

export { PrimaryButton, SecondaryButton, SimpleButton };
