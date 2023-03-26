import React from 'react'
import LogoFooter from ".././frontend/Img/footer/logoFooter.png";
import LogoLin from ".././frontend/Img/footer/linkedin.png";
import LogoGh from ".././frontend/Img/footer/github.png";


import Call from ".././frontend/Img/footer/phone-call.png";
import Mail from ".././frontend/Img/footer/mail.png";


export default function footer() {
  return (
    <footer>
        <div className='container-fluid footer'>
            <div className='row'>
                <FooterLogo/>
                <FooterAbout/>
                <FooterSocial/>
                <FooterContact/>
            </div>
            <span className='copy'>@ 2023 Portafolio | Maximino Rentería Moreno</span>
        </div>
    </footer>
  )
}
function FooterLogo(){
    return(
        <div className='col-md-3'>
            <img className="footer__logo" src={LogoFooter} alt="logo Footer"/>
        </div>
    )
}
function FooterAbout(){
    return(
        <div className='col-md-3'>
            <div className="footer__about">
                <b>Temas de Interes</b>
                <span>Ciencia de Datos</span>
                <span>Computación en la nube</span>
                <span>Inteligencia Artificial</span>
            </div>
        </div>
    )
}
function FooterSocial(){
    return(
        <div className='col-md-3 footer__img-redes'>
            {/* Redes sociales */}
            
            {/* <img src={LogoFace} alt=""/>
            <img src={LogoTwitt} alt=""/>
            <img src={LogoIns} alt=""/> */}

            <img src={LogoLin} alt=""/>
            <img src={LogoGh} alt=""/>
            {/* <img src={LogoYou} alt=""/> */}
            
            
        </div>
    )
}
function FooterContact(){
    return(
        <div className='col-md-3 footer__contact'>
            <div>
                <img src={Call} alt=""/><span>Telefono</span>
                <span>3207022512 3207022512</span>
            </div>
            <div>
            <img src={Mail} alt=""/>
            <a href="mailto:maxanoiting18@gmail.com">Email: maxanoiting18@gmail.com</a>
            </div>
            
        </div>
    )
}

