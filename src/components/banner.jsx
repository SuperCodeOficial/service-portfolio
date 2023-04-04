import React from 'react'
import Videofondo from "../frontend/video/Keyboard.mp4"

export default function banner() {
  return (
    <section className='banner content section'>
      <div className="banner-video">
        <video autoPlay loop>
          <source src={Videofondo} type="video/mp4"/>
        </video>
      </div>
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Maximino Rentería Moreno</h1>
        <span>Desarrollador Web</span>
        <p>Apasionado por resolver problemas escribiendo lineas de código frente al pc mientras disfruto una taza de cafe.</p>
      </div>
    </section>
  )
}
