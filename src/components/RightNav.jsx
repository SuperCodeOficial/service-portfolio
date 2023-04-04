import React from 'react';

import styled from 'styled-components';
import Home from "../frontend/Img/header/home.png";
import Lang from "../frontend/Img/header/web1-dev.png";
import Know from "../frontend/Img/header/know.png";
import Proyect from "../frontend/Img/header/proyect.png";
import Contact from "../frontend/Img/header/contactos.png";

const Ul = styled.ul`
    list-style:none;
    background-color:white;
    // border-bottom: 3px double;
    display:flex;
    // justify-content: flex-end;
    align-items: center;
    flex-flow: row nowrap;
    z-index:10;
    // padding-left: 250px;
    margin-top: -5px;
    // top:0;
    li{
        padding: 18px 10px;
    }
    li a{
        text-decoration: none;
        color:#5956a8;
        font-weight: bolder;
        
        // border: 3px red solid;
        margin: 0 25px;
        z-index: 300;
    }
    li: hover{
        background-color:#5956a8;
        a{
            color:white;
        }
    }

    a img{
        // border: 3px solid red;
        padding-right:7px;
    }
    @media (max-width:768px){
        flex-flow: column nowrap;
        background-color: gainsboro;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        right:0;
        height: 70vh;
        
        width:200px;
        padding-top: 3.5rem;
        
        transition: transform 0.3s ease-in-out;
        
        li{
            color: #fff;
        }
    }
`;

const RightNav = ({open}) => {
  return (
    <Ul open={open}>
        <li><a href='#'><img src={Home}/>Home</a></li>
        <li><a href='#know'><img src={Know}/>Know</a></li>
        <li><a href='#experience'><img src={Lang}/>Experience</a></li>
        <li><a href='#proyect'><img src={Proyect}/>Proyect</a></li>
        <li><a href='#contact'><img src={Contact}/>Contact</a></li>
    </Ul>
  )
}

export default RightNav