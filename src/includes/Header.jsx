import React from 'react';
import Burger from "../components/Burger";
import Logo from ".././frontend/Img/header/devops.png";

export default function Header() {
  return (
    <header className='header-Max'>
        <nav className=''>
            <div className="">
                <img src={Logo} alt="" />
            </div>
            <Burger/>
        </nav>
    </header>
  )
}
