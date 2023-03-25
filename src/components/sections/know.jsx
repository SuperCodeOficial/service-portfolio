import React from 'react'

export default function know() {
  return (
    <section className=''>
        <div className="container-xxl border border-danger">
            <div className="row">
                <div className="col-md-5 border border-primary">Perfil</div>
                <div className="col-md-7 border border-primary">Experiencia</div>
            </div>
        </div>
    </section>
  )
}
function AcordionComponent(){
    
    return(
      <Col className='know-acordion' lg={6}>
        <div className='Title-componente'>
            <h2>Conocimientos</h2>
            <div className='line'></div>
        </div>
        <Acordion title= "Mi Perfil" content={`<p>Poseo Conocimientos en Diseño Frontend con HTML, CSS, SCSS, Boostrap, JavaScript, React JS. App nativas con React-native usando TypeScript, Programación en Java SE, Visual C#, Bases de Datos MySQL, PHP, Git & GitHub. Backend con Golang, Desarrollo de sitios web auto administrables con Wordpress.</p>`}/>
        <Acordion title= "Estudios" content={`<p>Realicé la etapa lectiva en el tecnico en programación de software en el sena, participante de la primera cohorte de la academia de desarrollo Río software en la formación como desarrollador frontend.</p>`}/>
        <Acordion title= "Soft Skill" content={`<p>Creatividad, Empatía, Resiliencia, Resolución de problemas, Trabajo en Equipo.</p>`}/>
        <Acordion title= "Idiomas" content={`<p>Español nativo, Ingles A2.</p>`}/>
      </Col>
    );
}