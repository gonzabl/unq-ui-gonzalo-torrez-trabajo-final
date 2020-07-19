import React, { useState } from 'react';
import selector from '../img/selector.png'

function Computadora(){

    const [seleccion,setSeleccion] = useState("");

    return (
        <div>
            <h3>Computadora</h3>
            <br />
            <div><span class="rounded-sm"><img src={selector} width="25%"/></span></div>
        </div>
    );
} 

export default Computadora;