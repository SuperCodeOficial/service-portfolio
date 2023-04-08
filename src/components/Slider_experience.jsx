import React, { Component } from "react";
import Slider from "react-slick";

import Playlee from "../frontend/Img/ylc.webp";
import Modal from "../components/EstactExample";
import DepuraM from "../components/depura-details";
import YCL from "../components/playlee-details";
import Hackaton from "../components/hackaton-details";


export default class PreviousNextMethods extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };
    return (
        <section className="experience" id="experience">
            
    <div className="container experience-container__slider">
    <div className="title-component">
                <h2>Experiencia</h2>
                <div className="line"></div>
            </div>
        <Slider className="slider" ref={c => (this.slider = c)} {...settings}>
        <div className="card" key={1}>
            <DepuraM/>
        </div>
        <div className="card" key={2}>
            <YCL/>
        </div>
        <div className="card" key={3}>
            <Hackaton/>
        </div>
        </Slider>
        </div>
        </section>
    );
    }
}