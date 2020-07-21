import React, { useState }  from 'react';

function Ganador(props){
    
    const [cpu,setCpu] = useState("");
    const jugador = props.player;
    const opciones = ["piedra","papel","tijera","lagarto","spock"];

    function eleccionComputadora() {
        let eleccion = Math.floor(Math.random() * 5);
        setCpu(opciones[eleccion]);
    }

    const calcularGanador= (j)=> {
        //eleccionComputadora();
        let resultado;
        let e = Math.floor(Math.random() * 5);
        console.log(e);
        let c = opciones[e];
        console.log(c);
        switch(j) {
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
                    resultado = "empate";
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
        return(
            <div class="alert alert-success alert-dismissible">
                <strong>{resultado}</strong>
            </div>   
        );
    }

    return (
        <div>
            <button onClick={() => calcularGanador(jugador)}>Jugar</button>
        </div>
    );
} 

export default Ganador;