"use client";

import React from 'react'
import Image from 'next/image'
import styled from "styled-components";


function FullPage() {
  return (
    <FullpageStyled>
      <div className='image'>
        <Image 
        src="/images/rover.jpg"
        alt="monky"
         fill={true}
         style={{objectFit:"cover", objectPosition:"center"}}
        />
        </div>
      </FullpageStyled>
  )
}

const FullpageStyled = styled.div`
.image{
width:calc(100% - 10rem);
height:1000px;
position:relative;
border-radius:1rem;
border: 1px solid var(--color-border);
transition: border 0.3s ease-in-out;
}

img{
  padding:1.5rem
}
&:hover{
  border: 1px solid #f2994a;
}


`



export default FullPage