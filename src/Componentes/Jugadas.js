import React, { useState } from 'react';
import selector from '../img/selector.png'
import piedra from '../img/piedra.png'
import papel from '../img/papel.png'
import tijera from '../img/tijera.png'
import lagarto from '../img/lagarto.png'
import spock from '../img/spock.png'

function Jugadas(){

    const [imagen,setImagen] = useState(selector);
   // const opciones = ["piedra","papel","tijera","lagarto","spock"];


    return(
    <div>
            <h3>Jugador</h3>
            <h5>Seleccionar:</h5>
            <div><span class="rounded-sm"><img src={imagen} alt="img" width="20%"/></span></div>
            <div class="btn-group">
                <button type="button" class="btn btn-primary" onClick={()=>setImagen(piedra)}>Piedra</button>
                <button type="button" class="btn btn-primary" onClick={()=>setImagen(papel)}>Papel</button>
                <button type="button" class="btn btn-primary" onClick={()=>setImagen(tijera)}>Tijera</button>
                <button type="button" class="btn btn-primary" onClick={()=>setImagen(lagarto)}>Lagarto</button>
                <button type="button" class="btn btn-primary" onClick={()=>setImagen(spock)}>Spock</button>
            </div>
    </div>);
}

export default Jugadas;