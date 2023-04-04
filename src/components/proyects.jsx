import React from 'react'
import Protect_x from "../frontend/Img/gestion-de-proyectos.png";
import Chat from "../frontend/Img/chat.png";
export default function proyects() {
  return (
    <section className='proyect' id='proyect'>
        <div className="container proyect-container">
            <div className="title-component">
                <h2>Proyectos</h2>
                <div className="line"></div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="proyect-card">
                        <div className="proyect-card__img">
                            <img src={Chat} alt="" />
                        </div>
                        <div className="proyect-card-text">
                            <div className="proyect-card-text__title">
                                <h3>ChatServer</h3>
                            </div>
                            <div className="proyect-card-text__icons">

                            </div>
                            <div className="proyect-card-text__action">
                                <button>Ver en vivo</button>
                                <button>Ver Github</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="proyect-card">
                        <div className="proyect-card__img">
                            <img src={Protect_x} alt="" />
                        </div>
                        <div className="proyect-card-text">
                            <div className="proyect-card-text__title">
                                <h3>Proyecto2</h3>
                            </div>
                            <div className="proyect-card-text__icons">

                            </div>
                            <div className="proyect-card-text__action">
                                <button>Ver en vivo</button>
                                <button>Ver Github</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="proyect-card">
                        <div className="proyect-card__img">
                            <img src={Protect_x} alt="" />
                        </div>
                        <div className="proyect-card-text">
                            <div className="proyect-card-text__title">
                                <h3>Proyecto3</h3>
                            </div>
                            <div className="proyect-card-text__icons">

                            </div>
                            <div className="proyect-card-text__action">
                                <button>Ver en vivo</button>
                                <button>Ver Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
