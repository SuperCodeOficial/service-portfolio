import React from 'react'

export default function proyects() {
  return (
    <section>
        <div className="container">
            <h2 className='text-center'>Proyectos</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-img"></div>
                        <div className="card-text">
                            <h3>Proyecto1</h3>
                            <button>Ver en vivo</button>
                            <button>Ver Github</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <div className="card-img"></div>
                        <div className="card-text">
                            <h3>Proyecto2</h3>
                            <button>Ver en vivo</button>
                            <button>Ver Github</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card">
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
