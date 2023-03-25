import React, { Component } from "react";
import Slider from "react-slick";
import Company from "../../frontend/Img/experience.png";

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
    <div className="container container-slider">
        <h2>Slider Experiencia</h2>
        <Slider className="slider" ref={c => (this.slider = c)} {...settings}>
        <div className="card" key={1}>
            <div className="card-body">
            <div className="card-body__text">
            <div className="card-body__img">
                <img src={Company} alt="" />
            </div>
            <h3>Empresa 1</h3>
            <span>Desarrollador</span>
            <p>descripcion</p>
            <button>Ir a</button>
            </div>
            </div>
        </div>
        <div className="card" key={2}>
        <div className="card-body">
            <div className="card-body__text">
            <div className="card-body__img">
            <img src={Company} alt="" />
            </div>
            <h3>Empresa 2</h3>
            <span>Desarrollador</span>
            <p>descripcion</p>
            <button>Ir a</button>
            </div>
            </div>
        </div>
        <div className="card" key={3}>
        <div className="card-body">
            <div className="card-body__text">
            <div className="card-body__img">
            <img src={Company} alt="" />
            </div>
            <h3>Empresa 3</h3>
            <span>Desarrollador</span>
            <p>descripcion</p>
            <button>Ir a</button>
            </div>
            </div> 
        </div>
        </Slider>
        </div>
    );
    }
}