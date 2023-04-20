import React from 'react'
import Protect_x from "../frontend/Img/gestion-de-proyectos.png";
import Chat from "../frontend/Img/chat.png";
import User from "../frontend/Img/userproyect.png";
import Bootstrap from "../frontend/Img/bootstrap.png";
import Bootstrap2 from "../frontend/Img/bootswatch_logo.png";
import Next from "../frontend/Img/nextjs.png";
import Css from "../frontend/Img/css.png";
import Go from "../frontend/Img/golang.png";
import Js from "../frontend/Img/javascript.png";
import Rct from "../frontend/Img/react_icon.png";
import Sass from "../frontend/Img/sass-icon.png";
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
                            <img src={Bootstrap} alt="" />
                            <img src={Go} alt="" />
                            <img src={Js} alt="" />
                            <img src={Css} alt="" />
                            </div>
                            <div className="proyect-card-text__action">
                            <button className="proyect-card-text__action-vivo"><a href="#" target='_blanḱ'>Ver en vivo</a>
                                </button>
                                <button className="proyect-card-text__action-code">
                                <a href="" target='_blanḱ'>Ver Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="proyect-card">
                        <div className="proyect-card__img">
                            <img src={User} alt="" />
                        </div>
                        <div className="proyect-card-text">
                            <div className="proyect-card-text__title">
                                <h3>ListUser</h3>
                            </div>
                            <div className="proyect-card-text__icons">
                                <img src={Bootstrap2} alt="" />
                                <img src={Next} alt="" />
                                <img src={Css} alt="" /> 
                            </div>
                            <div className="proyect-card-text__action">
                                <button className="proyect-card-text__action-vivo"><a href="https://nextfirstproyect.vercel.app/" target='_blanḱ'>Ver en vivo</a>
                                </button>
                                <button className="proyect-card-text__action-code">
                                <a href="https://github.com/SuperCodeOficial/first-app-next" target='_blanḱ'>Ver Github</a>
                                </button>
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
                            <img src={Bootstrap} alt="" />
                            <img src={Go} alt="" />
                            <img src={Rct} alt="" />
                            <img src={Sass} alt="" />
                            <img src={Sass} alt="" />
                            </div>
                            <div className="proyect-card-text__action">
                            <button className="proyect-card-text__action-vivo"><a href="" target='_blanḱ'>Ver en vivo</a>
                                </button>
                                <button className="proyect-card-text__action-code">
                                <a href="" target='_blanḱ'>Ver Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
