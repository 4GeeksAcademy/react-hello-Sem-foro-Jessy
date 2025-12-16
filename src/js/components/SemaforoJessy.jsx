import React, { useState } from "react";

function SemaforoJessy (){
    const [color, setColor] = useState ("");
    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center m-1">
            <h1>Hola soy un semáforo</h1>
            <div className="caja">
                <div className={`rojo ${"rojo"==color ? "rojo-iluminacion":""}`} onClick={()=>{setColor("rojo")}}></div>
                <div className={`amarillo ${"amarillo"==color ? "amarillo-iluminacion":""}`} onClick={()=>{setColor("amarillo")}}></div>
                <div className={`verde ${"verde"==color ? "verde-iluminacion":""}`} onClick={()=>{setColor("verde")}}></div>
            </div>
        </div>
    )
}

export default SemaforoJessy