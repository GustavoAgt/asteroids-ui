import styled from "@emotion/styled";
import React, { ReactNode, useState } from "react";

//@ts-ignore
import { MapIcon } from "@heroicons/react/outline";

import { PRIMARY_COLOR, SUBTLE_TEXT_COLOR } from "@ast/constants/colors";

import Check from "../check/check";

const Container = styled.div`
  position: relative;
  width: 37.5rem;
  cursor: pointer;

  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 100rem;
`;

const Container3D = styled.div<{ flip: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: transform 700ms 400ms ease-out;

  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "rotateY(0deg)")};
  transition: transform 700ms 400ms ease-out;
`;

const ContainerFront = styled.div<{ flip: boolean }>`
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const ContainerBack = styled.div`
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  z-index: 0;
  height: 30vh;
  width: 100%;
  transform: rotateY(180deg);

  border: 1px solid #c8c8c8;
  border-radius: 1rem;
`;

const CardContainerImg = styled.div`
  position: relative;
  height: 30vh;
  border: 1px solid transparent;
  border-radius: 1rem;
`;

const CardInfoSection = styled.div``;

const CardInfoTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 300;
  padding: 1rem 0;
  text-transform: uppercase;
  span:nth-of-type(2) {
    margin-left: 1rem;
  }
`;

const InfoSub = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 100;
  letter-spacing: 0.2rem;
  color: ${SUBTLE_TEXT_COLOR};
  text-transform: uppercase;

  & > *:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

const InfoEventContainer = styled.div`
  display: flex;
  & > * {
    padding: 0.15rem 0;
  }
`;

const BackFlipInfoContent = styled.div`
  width: 100%;
  column-gap: 1rem;
  row-gap: 1rem;
  display: flex;
  padding: 1rem;
  justify-content: space-around;
`;

type Props = {
  image: ReactNode;
  info: ReactNode;
  check: ReactNode;
  backFlipContent: ReactNode;
};

function Card({ image, info, backFlipContent }: Props) {
  const [flipToBack, setFlipToBack] = useState(false);
  let flipbackTimeout: string | number | NodeJS.Timeout | undefined = undefined;
  return (
    <Container>
      <Container3D
        flip={flipToBack}
        onMouseLeave={() => {
          if (flipToBack) {
            flipbackTimeout = setTimeout(() => {
              setFlipToBack(false);
            }, 2000);
          }
        }}
        onMouseEnter={() => {
          if (flipToBack) clearTimeout(flipbackTimeout);
        }}
      >
        <Check
          children={<MapIcon style={{ width: "2.2rem" }} />}
          position={{
            absolute: true,
            top: "10%",
            left: "90%",
            tleft: "-50%",
            ttop: "-50%",
          }}
          color={"#fff"}
          bgColor={PRIMARY_COLOR}
          checked={flipToBack}
          setChecked={setFlipToBack}
        />
        <ContainerFront flip={flipToBack}>
          {image}
          {info}
        </ContainerFront>

        <ContainerBack>{backFlipContent}</ContainerBack>
      </Container3D>
    </Container>
  );
}

Card.ImageContainer = CardContainerImg;
Card.Info = CardInfoSection;
Card.InfoTitle = CardInfoTitle;
Card.InfoSub = InfoSub;
Card.InfoEventContainer = InfoEventContainer;

Card.BackFlipInfoContent = BackFlipInfoContent;

export default Card;
