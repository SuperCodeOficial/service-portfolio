import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import User from '../frontend/Img/user.png';
import Email from '../frontend/Img/letter.png';
import Phone from '../frontend/Img/phone.png';

function BasicExample() {
  return (
    <section className="contact" id='contact'>
        <div className="title-component">
            <h2>Contácto</h2>
            <div className="line"></div></div>
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
                    <label htmlFor="" className='field'>Nombres</label>
                        <div>
                            <input type="email" name="" id="" className='text' />
                        </div>
                    </Form.Group>
                    <Form.Group className="contact-details__phone mb-1">
                    <label htmlFor="" className='field'>Telefono/Celular</label>
                    <div>
                        <input type="email" name="" id="" className='text' />
                    </div>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <label htmlFor="" className='field'>Correo Electronico</label>
                        <div>
                            <input type="email" name="" id="" className='text' />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <label htmlFor="" className='field'>Mensaje</label>
                        <div>
                            <textarea name="" className='text' id="" ></textarea>
                        </div>
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