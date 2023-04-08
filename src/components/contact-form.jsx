import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import User from '../frontend/Img/user.png';
import Email from '../frontend/Img/letter.png';
import Phone from '../frontend/Img/phone.png';

function BasicExample() {
  return (
    <section className="contact">
        <div className="container contact-container">
        <div className="row">
            <div className="contact-info col-lg-4">
                <div className='contact-info__logo'>
                <img src={User} alt="" />
                </div>
                <div className='contact-info__title'><h3>Información de Contácto</h3></div>
                <div className='contact-info__more'>
                <div>
                    <img src={Email} alt="" />
                    <span>maxanoiting18@gmail.com</span>
                </div>
                <div>
                    <img src={Phone} alt="" />
                    <span>+573128482957</span>
                </div>
                </div>
            </div>
            <div className="contact-details col-lg-8">
                <span>Envía tu Mensaje</span>
                <Form>
                    <Form.Group className="contact-details__name">
                        <Form.Label className='field' >Nombres</Form.Label>
                        <Form.Control className='text' type="text"/>
                    </Form.Group>
                    <Form.Group className="contact-details__phone mb-1">
                        <Form.Label className='field'>Telefono/Celular</Form.Label>
                        <Form.Control className='text' type="text" />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='field'>Correo Electronico</Form.Label>
                        <Form.Control className='text' type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className='field'>Mensaje</Form.Label>
                        <Form.Control className='text' type="text"/>
                    </Form.Group>
                    <Form.Group className="send mb-1">
                <Button type="submit">
                Enviar
                </Button>
                </Form.Group>
            </Form>
            </div>
        </div>
    </div>
    </section>
  
  );
}

export default BasicExample;