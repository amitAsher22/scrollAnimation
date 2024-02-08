"use client";
import Header from "./components/Header/Header";
import styled from "styled-components";
import SectionLayout from "./components/SectionLayout";
import TextSection from "./components/TextSection";
import Footer from "./components/Footer";
import FullPage from "./components/FullPage";
import { cards } from "./utils/cards";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <div className="cards">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </SectionLayout>
        <FullPage />

        <SectionLayout>
          <div className="cards">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </SectionLayout>
        <SectionLayout>
          <TextSection />
        </SectionLayout>
        <SectionLayout>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/OuaUjkZhfaQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write;"
              allowFullScreen
            ></iframe>
          </div>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
