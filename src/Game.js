import React from 'react';
import './Game.css';
import reglas from './img/reglas.png'
import Jugador from './Componentes/Jugador';
import Ganador from './Componentes/Ganador';
import Computadora from './Componentes/Computadora';

function Game() {




  
  return (
    <div class="grid-container">
        <div class="item1">Bienvenidos a Piedra, Papel, Tijera, Lagarto o Spock!</div>
        <div class="item2"><h3>Reglas:</h3> 
          <img src={reglas} className="reglas" alt="reglas" /></div>
        <div class="item3"><Jugador /></div>  
        <div class="item4"><Computadora /></div>
        <div class="item5"><Ganador /> </div>
  </div>
  );
}

export default Game;
