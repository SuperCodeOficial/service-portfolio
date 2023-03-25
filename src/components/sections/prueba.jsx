import React from 'react'

export default function prueba() {
  return (
    <React.Fragment>
            {/* <CssBaseline /> */}
            <div class='vidContain'>
                <div class='vid'>
                    <video loop autoPlay>
                        <source src="../../frontend/Vdo/Keyboard.mp4" type="video/mp4" ></source>
                    </video>
                </div>
                <div class='content'>Team Manager es juego en equipo</div>
            </div>
        </React.Fragment>
  )
}
