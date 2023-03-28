import React from 'react';
import LogoFace from "../frontend/Img/flysocial/facebook.png";
import LogoTwitt from "../frontend/Img/flysocial/twitter.png";
import LogoIns from "../frontend/Img/flysocial/instagram.png";
// import LogoYou from "../../asset/png/youtube.png";

// import "./Flysocial.scss";

export default function Flysocial() {
  return (
    <div className='flysocial'>
      <div>
      <a href="https://www.facebook.com/maxdecristo.renteria.5" target={'_blank'} ><img src={LogoFace} alt="logo facebook"/></a>
      <a href='#'><img src={LogoTwitt} alt="logo twitter"/></a>
      <a href='#'><img src={LogoIns} alt="logo instagram"/></a>
      {/* // <a href='#'><img src={LogoYou} alt="logo youtube"/></a> */} 
      </div>
    </div>
  )
}
