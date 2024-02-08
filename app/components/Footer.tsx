"use client"

import React from 'react'
import styled from "styled-components"
import logo from "../../public/logo.png"
import footer from "../utils/footer"
import Image from "next/image"
import {AiFillGithub ,AiFillTwitterCircle , AiFillInstagram , BsDiscord   } from "react-icons/ai"


function Footer() {
  return (
    <FooterStyled>
      <nav>
        <div className='logo-con'>
          <Image src={logo} width={36} alt="logo"/>
          <h2>logo</h2>
        </div>
        <div className='input'>
          <input type='text' placeholder="Subscribe here.."/>
          <button>&#8594;</button>
        </div>
        <p>Create , Sell And Collect Truly Rare Digital Artworks. Powered</p>
        <div className='sicials'>
          <AiFillGithub/>
          <AiFillTwitterCircle/>
          <AiFillInstagram/>
          <BsDiscord/>
        </div>

        <div className='links'>
          {footer.map((item: any , index: number)=> {
            return(
              <div key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((text: any, index: number)=>{
                    return(
                      <li key={index}>
                        <a href=''>{text.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}

        </div>
      </nav>
      </FooterStyled>
  )
}

const FooterStyled = styled.footer`


`

export default Footer