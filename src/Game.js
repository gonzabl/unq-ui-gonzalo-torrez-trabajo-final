import React from 'react';
import './Game.css';
import reglas from './img/reglas.png'

function Game() {
  return (
    <div class="wrapper">
      <div class="box a">Header</div>
      <div class="box b">Ganador: " "</div>
      <div class="box c">
          <h3>Reglas:</h3> 
          <img src={reglas} className="reglas" alt="reglas" />
      </div>
      <div class="box d">Jugador</div>
      <div class="box e">Computadora</div>
    </div>
  );
}

export default Game;
