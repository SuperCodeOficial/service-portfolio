import React from 'react';
import Header from "../components/header/Header";
import Banner from "../components/sections/banner_v";
import Know from "../components/know/know";
import Slider from "../components/know/SimpleSlider";
import Max from "../components/know/max";

import "../frontend/scss/theme.scss";

export default function home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Know/>
      <Slider/>
      <Max/>
    </>
  )
}
