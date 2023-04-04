import React from 'react'
import LogoFooter from ".././frontend/Img/footer/logoFooter.png";
import LogoLin from ".././frontend/Img/footer/linkedin.png";
import LogoGh from ".././frontend/Img/footer/github.png";


import Whatsapp from ".././frontend/Img/footer/whatsapp.png";
import Mail from ".././frontend/Img/footer/mail.png";


export default function footer() {
  return (
    <footer className='footer' id='contact'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <FooterLogo/>
                </div>
                <div className="col-md-6">
                    <div className="footer-about">
                        <span>Temas de Interés</span>
                        <ul>
                            <li>Ciencia de Datos</li>
                            <li>Computación en la nube</li>
                            <li>Inteligencia artificial</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <MoreInfo/>
                </div>
            </div>
        </div>
        <span className='copy'>@ 2023 Portafolio | Maximino Rentería Moreno</span>
    </footer>
  )
}
{/* <div className='container-fluid footer'>
            <div className='row'>
                <FooterLogo/>
                <FooterAbout/>
                <FooterSocial/>
                <FooterContact/>
            </div>
            <span className='copy'>@ 2023 Portafolio | Maximino Rentería Moreno</span>
        </div> */}
function FooterLogo(){
    return(
        <div className='footer__logo'>
            <div>
                <img src={LogoFooter} alt="logo Footer"/>
            </div>
        </div>
    )
}
function MoreInfo(){
    return(
        <div className="more">
            <span>Contáctame aquí!</span>
            <div className='footer-more-info'>

            <div className="footer-more-info__lg">
                <img src={LogoLin} alt="" />
                <img src={LogoGh} alt="" />
            </div>
            <div className="footer-more-info__te">
                <img src={Whatsapp} alt="" />
                <img src={Mail} alt="" />
            </div>
        </div>
        </div>
    )
// }
// function FooterAbout(){
//     return(
//         <div className='col-md-3'>
//             <div className="footer__about">
//                 <b>Temas de Interes</b>
//                 <span>Ciencia de Datos</span>
//                 <span>Computación en la nube</span>
//                 <span>Inteligencia Artificial</span>
//             </div>
//         </div>
//     )
// }
// function FooterSocial(){
//     return(
//         <div className='col-md-3 footer__img-redes'>
//             {/* Redes sociales */}
            
//             {/* <img src={LogoFace} alt=""/>
//             <img src={LogoTwitt} alt=""/>
//             <img src={LogoIns} alt=""/> */}

//             <img src={LogoLin} alt=""/>
//             <img src={LogoGh} alt=""/>
//             {/* <img src={LogoYou} alt=""/> */}
            
            
//         </div>
//     )
// }
// function FooterContact(){
//     return(
//         <div className='col-md-3 footer__contact'>
//             <div>
//                 <img src={Call} alt=""/><span>Telefono</span>
//                 <span>3207022512 3207022512</span>
//             </div>
//             <div>
//             <img src={Mail} alt=""/>
//             <a href="mailto:maxanoiting18@gmail.com">Email: maxanoiting18@gmail.com</a>
//             </div>
            
//         </div>
//     )
}

