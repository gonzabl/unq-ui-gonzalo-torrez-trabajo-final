import React from 'react';
import Reglas from './Reglas';
import Game from '../Game';

function HomePage(){

    return(
        <div class="grid-container">
            <div class="item1"><h1>Bienvenidos a Piedra, Papel, Tijera, Lagarto o Spock!</h1></div>
            <div class="item2"><Reglas /></div>
            <div class="item3"><Game /> </div>
        </div>
    );
}

export default HomePage;