import React, {useState, useRef} from "react";
import Chevron from "./Chevron";

function Acordion(props) {
    const [setActive, setActiveState] = useState("");
    const [SetHeight, SetHeightState] = useState("0px");
    const [SetRotate, SetRotateState] = useState("accordion__icon");


    const content = useRef(null);

    function toggleacordion(){
        setActiveState(setActive === "" ? "active" : "");
        SetHeightState(
            setActive === "" ? "0px" : `${content.current.scrollHeight}px`
        )
        SetRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return (
    <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleacordion}>
            <p className="accordion__title">{props.title}</p>
            <Chevron className={`${SetRotate}`} width={10} fill={"#777"}/>
        </button>
        <div ref={content} style={{maxHeight: `${SetHeight}`}} className="accordion__content">
            <div 
                className="accordion__text"
                dangerouslySetInnerHTML={{ __html: props.content}}
            />
        </div>
    </div>
  );
}
export default Acordion;