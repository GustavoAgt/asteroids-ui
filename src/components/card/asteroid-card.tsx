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
  transform: rotateY(180deg);
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
`;

const InfoLocation = styled.span`
  display: flex;
  font-size: 1.4rem;
  font-weight: 100;
  letter-spacing: 0.2rem;
  color: ${SUBTLE_TEXT_COLOR};
  text-transform: uppercase;
`;

const InfoEventContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    padding: 0.15rem 0;
  }
`;

type Props = {
  image: ReactNode;
  info: ReactNode;
  check: ReactNode;
};

function Card({ image, info }: Props) {
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

        <ContainerBack>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          delectus, adipisci cupiditate ipsam doloribus provident animi officia
          facilis quasi nostrum vel, autem vitae dignissimos odit! Quos
          molestiae dolorum voluptatum perferendis.
        </ContainerBack>
      </Container3D>
    </Container>
  );
}

Card.ImageContainer = CardContainerImg;
Card.Info = CardInfoSection;
Card.InfoTitle = CardInfoTitle;
Card.InfoLocation = InfoLocation;
Card.InfoEventContainer = InfoEventContainer;

export default Card;
