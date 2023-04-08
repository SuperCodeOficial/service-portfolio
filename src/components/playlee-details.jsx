// import React from "react";
import Modalx from "../components/modal-playlee";
import Company from "../frontend/Img/rompecabezas.png";
import Playlee from "../frontend/Img/logoplaylee.png";
import Depura from "../frontend/Img/logo-dp.svg";
import React, { useState } from 'react';

const Depuradetails = () => {
    // eslint-disable-next-line no-undef
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <><div className="card-body">
            <div className="card-body__text">
                <div className="card-body__img">
                    <img className="playlee" src={Playlee} alt="" height={150} />
                </div>
                <h3>Playlee -> YCL</h3>
                <span>Desarrollador Frontend</span>
                <button>Ver<a onClick={handleShow}>más</a></button>
            </div>
        </div>
        <Modalx show={show} handleClose={handleClose}/>
        </>
    )
}
export default Depuradetails;
