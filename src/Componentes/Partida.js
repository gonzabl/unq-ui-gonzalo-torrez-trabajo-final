import React  from 'react';
import selector from '../img/selector.png'
import piedra from '../img/piedra.png'
import papel from '../img/papel.png'
import tijera from '../img/tijera.png'
import lagarto from '../img/lagarto.png'
import spock from '../img/spock.png'
import Computadora from './Computadora';
import Ganador from './Ganador';

class Partida extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                cpu: "",
                img: selector,
                ganador: "",
            }
        }
    
    opciones = ["piedra","papel","tijera","lagarto","spock"];
    imagenes = [piedra,papel,tijera,lagarto,spock];
    
    calcularGanador(){
        let resultado;
        let e = Math.floor(Math.random() * 5);
        let c = this.opciones[e];
        
        switch(this.props.player) {
            case "piedra":
                            if(c === "piedra"){
                                resultado = "¡Empate!";
                            }else if(c === "tijera" || c === "lagarto"){
                                resultado = "Ganador Jugador!!";
                            }else{
                                resultado = "Ganador Computadora...";
                            }
                            break;
            case "papel":
                            if(c === "papel"){
                                resultado = "¡Empate!";
                            }else if(c === "piedra" || c === "spock"){
                                resultado = "Ganador Jugador!";
                            }else{
                                resultado = "Ganador Computadora...";
                            }
                            break;
            case "tijera":
                            if(c === "tijera"){
                                resultado = "¡Empate!";
                            }else if(c === "papel" || c === "lagarto"){
                                resultado = "Ganador Jugador!";
                            }else{
                                resultado = "Ganador Computadora...";
                            }
                            break;
            case "lagarto":
                            if(c === "lagarto"){
                                resultado = "¡Empate!";
                            }else if(c === "papel" || c === "spock"){
                                resultado = "Ganador Jugador!";
                            }else{
                                resultado = "Ganador Computadora...";
                            }
                            break;
            case "spock":
                            if(c === "spock"){
                                resultado = "¡Empate!";
                            }else if(c === "tijera" || c === "piedra"){
                                resultado = "Ganador Jugador!";
                            }else{
                                resultado = "Ganador Computadora...";
                            }
                            break;
            default:;
        }
        this.setState({ganador:resultado});
        this.setState({cpu:c});
        this.setState({img:this.imagenes[e]});
    }

    render(){
        return (
            <div>
                <Computadora img={this.state.img} />
                <Ganador  onClick={() => this.calcularGanador()} winner={this.state.ganador} player={this.props.player} ia={this.state.cpu} />
            </div>
        );
    }
} 

export default Partida;