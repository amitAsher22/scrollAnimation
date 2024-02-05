"use client";


import React , {useRef} from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Button from "../Button/Button";
import styled from "styled-components";
import { FaRocket, FaWallet } from "react-icons/fa";
import {Abril_Fatface} from 'next/font/google';
import hover3d from '../../utils/hover'

const abrill = Abril_Fatface({
  subsets: ['latin'],
  weight: "400"
})





function Header() {

const hero = useRef<HTMLDivElement>(null)
const hoverHero = hover3d(hero , {
  x:30,
  y:-40,
  z:30
});
const imageHover = hover3d(hero , {
  x:20,
  y:-5,
  z:11
});


  return (
    <HeaderStyled ref={hero}>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={36} />
          <h2>Logo</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <Button name="Connect Wallet" icon={<FaWallet />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abrill.className}>Buy , collect, and sell extraordinary NTFs</h1>
          <p>ccuride Corporation manufactures wheels, wheel end, and braking components for commercial and passenger vehicles. Our lean global manufacturing footprint mean</p>
          <div className="buttons">
            <Button name="Get Started"  background="#f2994a" color="#fff" border="1px solid #f2994a" icon={<FaRocket/>}/>
            <Button name="Learn More" />
          </div>
        </div>
          <div className="image-content">
              <div className="image" style={{transform : hoverHero.transform}}>
                <Image src="/images/monkey.png" width={600} height={600} alt="hero" style={{transform: imageHover.transform }} />
              </div>
          </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 1rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
   
  }

  .header-content {
    padding : 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

.text-content{
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  gap: 2rem;
  > h1{
    font-size: clamp(2rrem , 5w , 5rem);
    color:#2994a;
    transition: all 0.01s linear;
    padding-bottom: 1.5rem;
  }
}

  }
 


`;

export default Header;
