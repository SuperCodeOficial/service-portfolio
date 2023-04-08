// import React from "react";
import Modalx from "../components/modal-hackaton";
import Hackaton from "../frontend/Img/flychallenge.png";
import Playlee from "../frontend/Img/playlee.png";
import Depura from "../frontend/Img/logo-dp.svg";
import React, { useState } from 'react';

const Hackatondetails = () => {
    // eslint-disable-next-line no-undef
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <><div className="card-body">
            <div className="card-body__text">
                <div className="card-body__img">
                    <img className="playlee" src={Hackaton} alt="" height={150} />
                </div>
                <h3>Hackaton Helpeople</h3>
                <span>Desarrollador Frontend</span>
                <button>Ver<a onClick={handleShow}>más</a></button>
            </div>
        </div>
        <Modalx show={show} handleClose={handleClose}/>
        </>
    )
}
export default Hackatondetails;
