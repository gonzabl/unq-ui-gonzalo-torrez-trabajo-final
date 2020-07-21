import React from 'react';
import './Game.css';
import selector from './img/selector.png'
import piedra from './img/piedra.png'
import papel from './img/papel.png'
import tijera from './img/tijera.png'
import lagarto from './img/lagarto.png'
import spock from './img/spock.png'
import Partida from './Componentes/Partida';


class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          jugador: "",
          computadora: "",
          imagen: selector,

      }
    }

  handleClick(img,opcion){
    this.setState({imagen:img});
    this.setState({jugador:opcion});
  }

  render(){
    return(
      <div>
          <div class="item3">
              <h3>Jugador</h3>
              <h5>Seleccionar: {this.state.jugador}</h5>
              <div><span class="rounded-sm"><img src={this.state.imagen} alt="img" width="20%"/></span></div>
              <div class="btn-group">
                  <button type="button" class="btn btn-primary" onClick={()=>this.handleClick(piedra,"piedra")}>Piedra</button>
                  <button type="button" class="btn btn-primary" onClick={()=>this.handleClick(papel,"papel")}>Papel</button>
                  <button type="button" class="btn btn-primary" onClick={()=>this.handleClick(tijera,"tijera")}>Tijera</button>
                  <button type="button" class="btn btn-primary" onClick={()=>this.handleClick(lagarto,"lagarto")}>Lagarto</button>
                  <button type="button" class="btn btn-primary" onClick={()=>this.handleClick(spock,"spock")}>Spock</button>
              </div>
          </div>
          <div class="item5">
            <Partida player={this.state.jugador}/>
          </div>
      </div>
    );
  }
}

export default Game;
