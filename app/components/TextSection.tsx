"use client"

import styled from "styled-components";
import React from 'react'
interface Props {
  children: React.ReactNode;

}

const TextWrapper = ({children}: Props) =>{
  const text = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={text}>
      <p>{children}</p>
    </div>
  )
}

function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </TextWrapper>
      <TextWrapper>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </TextWrapper>
      <TextWrapper>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </TextWrapper>
      <TextWrapper>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </TextWrapper>
      <TextWrapper>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </TextWrapper>
      <TextWrapper>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </TextWrapper>
      <TextWrapper>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </TextWrapper>
      </TextSectionStyled>
  )
}


const TextSectionStyled = styled.section`
p{
font-size:5rem;
display:flex;
flex-direction:column;
justify-content:center;
gap:3rem;
}

`

export default TextSection