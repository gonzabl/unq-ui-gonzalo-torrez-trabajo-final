import React, { useState } from 'react';
import selector from '../img/selector.png'
import piedra from '../img/piedra.png'
import papel from '../img/papel.png'
import tijera from '../img/tijera.png'
import lagarto from '../img/lagarto.png'
import spock from '../img/spock.png'

function Jugador(props){

    const [imagen,setImagen] = useState(selector);


    const handleChange = (e)=>{
        setImagen(e.target.value);
    }

    return(
        <div>
            <h3>Jugador</h3>
            <label for="sel1">Selecionar:</label>
            <div><span class="rounded-sm"><img src={imagen} alt="img" width="20%"/></span></div>
            
            <select class="form-control" id="sel1" name="sellist1" onChange={(e)=> handleChange(e)}>
                <option value={selector}>Seleccionar...</option>
                <option value={piedra}>Piedra</option>
                <option value={papel}>Papel</option>
                <option value={tijera}>Tijera</option>
                <option value={lagarto}>Lagarto</option>
                <option value={spock}>Spock</option>
            </select>
        </div>
    );
}

export default Jugador;