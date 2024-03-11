import { useState, useRef, useEffect } from "react";
import '../styles/Typer.css';

function Typer() {
    const [typed, setTyped] = useState("");
    // const [position, setPosition] = useState(0);
    const textToType = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices nisl libero, sit amet viverra justo commodo tempus. Proin maximus risus leo, ac congue augue consectetur quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    // const funter = (e) => {
    //     // alert(e.target.innerText);
    //     if (e.target.innerText === textToType[position]) {
    //         setTyped(e.target.innerText);
    //         setPosition(position + 1);
    //     } else {
    //         setPosition(0);
    //         setTyped("");
    //     }
    // }

    useEffect(() => {
        if (typed.length === textToType.length) {
            
        }
    }, []);

    return (
        <div className="row h-75 col-lg-9 mx-auto align-content-center absolute-parent">
            <div className="absolute-child" id="typing-space" contentEditable='true'>{typed}</div>
            <div className="absolute-child" id="reference">{textToType}</div>
            {/* <p>{position}</p> */}
        </div>
    );
}

export default Typer;