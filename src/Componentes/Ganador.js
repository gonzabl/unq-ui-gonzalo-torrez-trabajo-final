import React, { useState, useEffect }  from 'react';
import selector from '../img/selector.png'
import piedra from '../img/piedra.png'
import papel from '../img/papel.png'
import tijera from '../img/tijera.png'
import lagarto from '../img/lagarto.png'
import spock from '../img/spock.png'
import Computadora from './Computadora';

function Ganador(props){
    
    const jugador = props.player;
    const [cpu,setCpu] = useState("");
    const [img,setImg] = useState(selector);
    const [ganador,setGanador] = useState("");
    
    const opciones = ["piedra","papel","tijera","lagarto","spock"];
    const imagenes = [piedra,papel,tijera,lagarto,spock];
    

    // function eleccionComputadora() {
    //     let eleccion = Math.floor(Math.random() * 5);
    //     setCpu(opciones[eleccion]);
    //     setImg(imagenes[eleccion]);
    // }

    useEffect(()=>{
        let eleccion = Math.floor(Math.random() * 5);
        setCpu(opciones[eleccion]);
        setImg(imagenes[eleccion]);
    },[opciones, imagenes]);

    const calcularGanador= ()=> {
        //eleccionComputadora();
        let resultado;

        //let e = Math.floor(Math.random() * 5);
        console.log("cpu eligio "+cpu);
       // let c = opciones[e];
        let c = cpu
        console.log("c eligio "+c);
        
        switch(jugador) {
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
        setGanador(resultado);
    }

    return (
        
        <div>
            <button onClick={() => calcularGanador()}>Jugar</button>
            {/* <Computadora valor={img}/> */}
        
            <div class="item4">
            <h3>Computadora</h3>
            <h4>{ganador}, cpu eligio {cpu}</h4>
            <div><span class="rounded-sm"><img src={img} alt="cpuImg" width="25%"/></span></div>
            
        </div>
        </div>
    );
} 

export default Ganador;