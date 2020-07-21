import React from 'react';
import Reglas from './Reglas';
import Jugadas from './Jugadas';
import Computadora from './Computadora';
import Ganador from './Ganador';
import Game from '../Game';

function HomePage(){

    return(
        <div class="grid-container">
        <div class="item1">Bienvenidos a Piedra, Papel, Tijera, Lagarto o Spock!</div>
        <div class="item2"><Reglas /></div>
        <Game />
        <div class="item4"><Computadora /></div>
    </div>
    );
}

export default HomePage;