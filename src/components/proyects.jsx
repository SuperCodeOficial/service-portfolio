import React from 'react'
import Protect_x from "../frontend/Img/gestion-de-proyectos.png";
export default function proyects() {
  return (
    <section className='proyect'>
        <div className="container proyect-container">
            <h2 className='text-center'>Proyectos</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="proyect-card">
                        <div className="proyect-card__img">
                            <img src={Protect_x} alt="" />
                        </div>
                        <div className="proyect-card__text">
                            <h3>Proyecto1</h3>
                            <button>Ver en vivo</button>
                            <button>Ver Github</button>
                            {/* Añadir seccion para iconos de lenguajes utilizados en el proyectos
                            titulo del proyecto, abajo los dos botones de accion */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="proyect-card">
                        <div className="card-img"></div>
                        <div className="card-text">
                            <h3>Proyecto2</h3>
                            <button>Ver en vivo</button>
                            <button>Ver Github</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="proyect-card">
                        <div className="card-img"></div>
                        <div className="card-text">
                            <h3>Proyecto3</h3>
                            <button>Ver en vivo</button>
                            <button>Ver Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
