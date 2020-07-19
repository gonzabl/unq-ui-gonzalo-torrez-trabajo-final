import React, { useState } from 'react';
import tijera from '../img/tijera.png'
import selector from '../img/selector.png'

function Jugador(props){

    const [imagen,setImagen] = useState(selector);


    return(
        <div>
            <h3>Jugador</h3>
            <label for="sel1">Selecionar:</label>
            <div><span class="rounded-sm"><img src={imagen} width="20%"/></span></div>
            
            <select class="form-control" id="sel1" name="sellist1">
                <option>Piedra</option>
                <option>Papel</option>
                <option>Tijera</option>
                <option>Lagarto</option>
                <option>Spock</option>
            </select>
        </div>
    );
}

export default Jugador;