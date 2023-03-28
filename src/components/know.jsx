import React from 'react'
import Acordion from "./Acordion";
import ImageKnow from "../frontend/Img/open-book.png";
export default function know() {
  return (
    <section className='mt-5'>
        <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
              <h2>Conocimientos</h2>
              <img src={ImageKnow} alt="" height={230}/>
              </div>
                <div className="col-md-8">
                  <AcordionComponent/>
                </div>
                
            </div>
        </div>
    </section>
  )
}
function AcordionComponent(){
    
  return(
    <div className='col-lg-12 know-acordion'>
      <div className='Title-componente'>
          
          <div className='line'></div>
      </div>
      <Acordion title= "Mi Perfil" content={`<p>Poseo Conocimientos en Diseño Frontend con HTML, CSS, SCSS, Boostrap, JavaScript, React JS. App nativas con React-native usando TypeScript, Programación en Java SE, Visual C#, Bases de Datos MySQL, PHP, Git & GitHub. Backend con Golang, Desarrollo de sitios web auto administrables con Wordpress.</p>`}/>
      <Acordion title= "Estudios" content={`<p>Realicé la etapa lectiva en el tecnico en programación de software en el sena, participante de la primera cohorte de la academia de desarrollo Río software en la formación como desarrollador frontend.</p>`}/>
      <Acordion title= "Soft Skill" content={`<p>Creatividad, Empatía, Resiliencia, Resolución de problemas, Trabajo en Equipo.</p>`}/>
      <Acordion title= "Idiomas" content={`<p>Español nativo, Ingles A2.</p>`}/>
    </div>
  );
}