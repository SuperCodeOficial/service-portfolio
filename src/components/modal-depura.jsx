import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Depura from "../frontend/Img/logo-dp.svg";

const Modaldepura = ({show, handleClose}) =>{
  
    return(
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header className="modal-title" closeButton>
            <div>
              <h3 className="modal-title__name">Depura creatividad!</h3>
            </div>
          {/* <Modal.Title className="modal-title__name">Depura creatividad!</Modal.Title> */}
        </Modal.Header>
          <div className="modal-body">
            <div className="modal-body__image">
              <img src={Depura} alt="" height={120} />
            </div>
            <div className="modal-body__cargo">
              Desarrollador Frontend
            </div>
              <div className="modal-body__description" >Desarrollo Sitios web, autoadministrables con el CMS wordpress, trabajando con campos personalizados con PHP, diseño CSS con SASS, Bootstrap, landing sencillo con React-js</div>
              <div className="modal-body__more">
                <span>Tiempo: Marzo 2022 hasta la fecha</span>
                <a href="https://depura-creatividad.com/" target={'_blank'}>depura-creatividad.com</a>
              </div>
            
          </div>
        {/* <Modal.Header closeButton>
          <div>
           <Modal.Title>Depura creatividad!</Modal.Title>
          </div>
        </Modal.Header>
        
          <img src="" alt="" />
          <span>Desarrollador Frontend</span>
          <p>Descripcion de lo que hacemos y con que tecnologias lo hacemos</p>
          <span>Tiempo: 1 Año actual</span>
          <div>
          <a href="#">depura-creatividad.com</a>
          </div> */}
        {/* <Modal.Body>
        </Modal.Body> */}
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    )
}
export default Modaldepura;