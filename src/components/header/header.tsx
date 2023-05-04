import styled from "@emotion/styled";
import { ReactNode } from "react";
import { keyframes } from "@emotion/react";

type Props = { className: string; children?: ReactNode };

const HeaderStyled = styled(({ className, children }: Props) => (
  <header className={className}>{children}</header>
))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to bottom right,
      rgba(192, 192, 192, 0.8),
      rgba(244, 180, 177, 0.4)
    ),
    url("/images/ast.png");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center left;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  position: relative;
`;

const visibility = keyframes`
  100% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }


  0%{
    opacity: 0;
  }
`;

const MainText = styled.blockquote`
  font-size: 3.3rem;
  position: absolute;
  width: 50%;
  text-transform: uppercase;
  top: 80%;
  left: 0%;
  transform: translate(10%, -50%);
  letter-spacing: 0.35rem;
  color: #fff;

  animation: ${visibility} 1.5s ease-in;

  &:before,
  &:after {
    position: absolute;
    color: #f1efe6;
    font-size: 8rem;
    width: 4rem;
    height: 4rem;
  }

  &:before {
    content: "“";
    left: -5rem;
    top: -2rem;
  }

  &:after {
    content: "”";
    right: 0rem;
    bottom: -0.5rem;
  }

  @media (max-width: 768px) {
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

type HeaderProps = {
  mainText: ReactNode;
  className: string;
};

function Header({ className, mainText }: HeaderProps) {
  return <HeaderStyled className={className}>{mainText}</HeaderStyled>;
}

Header.MainText = MainText;

export default Header;
