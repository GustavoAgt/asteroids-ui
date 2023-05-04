import Head from "next/head";
import Image from "next/image";

import { Roboto } from "next/font/google";

import CardSection from "@ast/components/card-section/card-section";
import Card from "@ast/components/card/asteroid-card";
import Header from "@ast/components/header/header";
import HomeStyle from "@ast/styles/Home.module.css";
import ButtonContainer from "@ast/components/button-container/button-container";
import { PrimaryButton } from "@ast/components/buttons/buttons";
import ContentSection from "@ast/components/content-section/content-section";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Asteroids</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        mainText={
          <Header.MainText>
            Sometimes we should
            <span
              style={{
                textDecoration: "line-through",
                margin: "0 1rem 0 1rem",
              }}
            >
              LOOK UP and
            </span>
            see the beautifulness of space
          </Header.MainText>
        }
        className={roboto.className}
      />

      <main className={`${roboto.className} ${HomeStyle.main}`}>
        <ContentSection>
          <ButtonContainer>
            <PrimaryButton value="Filter" width="90%" />
          </ButtonContainer>

          <CardSection>
            {Array.from({ length: 8 }).map((x, y) => (
              <Card
                key={y}
                check={false}
                image={
                  <Card.ImageContainer>
                    <Image
                      src="/images/ex1.jpeg"
                      alt="example card img"
                      fill
                      style={{ objectFit: "cover", borderRadius: "1rem" }}
                    />
                  </Card.ImageContainer>
                }
                info={
                  <Card.Info>
                    <Card.InfoTitle>{"La ~ Ect view ê Japan"}</Card.InfoTitle>

                    <Card.InfoEventContainer>
                      <Card.InfoLocation>
                        {"Japan 6t tokichida street"}
                      </Card.InfoLocation>
                      <Card.InfoLocation>{"Today"}</Card.InfoLocation>
                    </Card.InfoEventContainer>
                  </Card.Info>
                }
              />
            ))}
          </CardSection>
        </ContentSection>
      </main>
    </>
  );
}
