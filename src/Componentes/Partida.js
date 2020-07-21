import React  from 'react';
import selector from '../img/selector.png'
import piedra from '../img/piedra.png'
import papel from '../img/papel.png'
import tijera from '../img/tijera.png'
import lagarto from '../img/lagarto.png'
import spock from '../img/spock.png'

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
        console.log("el numero es "+e);
        console.log("c eligio "+c);
        
        switch(this.props.player) {
            case "piedra":
                            if(c === "piedra"){
                                resultado = "empate";
                            }else if(c === "tijera" || c === "lagarto"){
                                resultado = "Ganador Jugador";
                            }else{
                                resultado = "Ganador Computadora";
                            }
                            break;
            case "papel":
                            if(c === "papel"){
                                resultado = "empate";
                            }else if(c === "piedra" || c === "spock"){
                                resultado = "Ganador Jugador";
                            }else{
                                resultado = "Ganador Computadora";
                            }
                            break;
            case "tijera":
                            if(c === "tijera"){
                                resultado = "Empate";
                            }else if(c === "papel" || c === "lagarto"){
                                resultado = "Ganador Jugador";
                            }else{
                                resultado = "Ganador Computadora";
                            }
                            break;
            case "lagarto":
                            if(c === "lagarto"){
                                resultado = "empate";
                            }else if(c === "papel" || c === "spock"){
                                resultado = "Ganador Jugador";
                            }else{
                                resultado = "Ganador Computadora";
                            }
                            break;
            case "spock":
                            if(c === "spock"){
                                resultado = "empate";
                            }else if(c === "tijera" || c === "piedra"){
                                resultado = "Ganador Jugador";
                            }else{
                                resultado = "Ganador Computadora";
                            }
                            break;
        }
        console.log(resultado);
        this.setState({ganador:resultado});
        this.setState({cpu:c});
        this.setState({img:this.imagenes[e]});
    }

    render(){
        return (
            <div>
                <button onClick={() => this.calcularGanador()}>Jugar</button>
                <div class="item4">
                <h3>Computadora</h3>
                <h4>{this.state.ganador}, cpu eligio {this.state.cpu}</h4>
                <div><span class="rounded-sm"><img src={this.state.img} alt="cpuImg" width="25%"/></span></div>
                
            </div>
            </div>
        );
    }
} 

export default Partida;