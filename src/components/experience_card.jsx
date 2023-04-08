// import React from "react";
import Modalx from "../components/ModalExperience";
import Company from "../frontend/Img/rompecabezas.png";
import React, { useState } from 'react';

const Experience_card = () => {
    // eslint-disable-next-line no-undef
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <><div className="card-body">
            <div className="card-body__text">
                <div className="card-body__img">
                    <img src={Company} alt="" height={200} />
                </div>
                <h3>Empresa 3</h3>
                <span>Desarrollador</span>
                <button>Ver<a onClick={handleShow}>más</a></button>
            </div>
        </div>
        <Modalx show={show} handleClose={handleClose}/>
        </>
    )
}
export default Experience_card;
