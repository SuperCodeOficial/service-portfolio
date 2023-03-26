import React from 'react';
import Header from "../components/header/Header";
import Banner from "../components/banner/banner_v";
import Know from "../components/know/know";
import Slider from "../components/know/Slider_experience";
import Social from "../components/Flysocial/Flysocial";
import Proyects from "../components/proyects";
import Footer from "../includes/footer";


import "../frontend/scss/theme.scss";

export default function home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Know/>
      <Slider/>
      <Social/>
      <Proyects/>
      <Footer/>
    </>
  )
}
