import React from 'react';

import Header from "../includes/Header";
import Banner from "../components/banner";
import Know from "../components/know";
import Slider from "../components/Slider_experience";
import Social from "../components/flysocial";
import Proyects from "../components/proyects";
import Form from "../components/contact-form";
import Footer from "../includes/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

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
      <Form/>
      <Footer/> 
    </>
  )
}
