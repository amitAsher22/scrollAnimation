"use client";
import Header from "./components/Header/Header";
import styled from "styled-components";
import SectionLayout from "./components/SectionLayout";
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
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;
`;
