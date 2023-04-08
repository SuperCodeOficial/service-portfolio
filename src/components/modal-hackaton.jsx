import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Depura from "../frontend/Img/logo-dp.svg";
import Hackaton from "../frontend/Img/flychallenge.png";

const Modalhackaton = ({show, handleClose}) =>{
  
    return(
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header className="modal-title" closeButton>
            <div>
              <h3 className="modal-title__name">Hackaton Helpeople!</h3>
            </div>
          {/* <Modal.Title className="modal-title__name">Depura creatividad!</Modal.Title> */}
        </Modal.Header>
          <div className="modal-body">
            <div className="modal-body__image">
              <img src={Hackaton} alt="" height={120} />
            </div>
            <div className="modal-body__cargo">
              Desarrollador Frontend
            </div>
              <div className="modal-body__description" >Desarrollo Sitios web, autoadministrables con el CMS wordpress, trabajando con campos personalizados con PHP, diseño CSS con SASS, Bootstrap, landing sencillo con React-js</div>
              <div className="modal-body__more">
                <span>Tiempo: 20-25 de Febrero 2023</span>
                <a href="https://www.youtube.com/watch?v=IxFEmdD9DSw" target={'_blank'}>Fly Challenge Helpeople </a>
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
export default Modalhackaton;