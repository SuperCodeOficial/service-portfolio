import React from 'react'
import Videofondo from "../../frontend/Vdo/Keyboard.mp4"

export default function banner_v() {
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
        <p>Aqui va el texto cantidad de ejemplo</p>
      </div>
    </section>
  )
}
