import React from 'react';

function Ganador(props){

    
    const Info = () =>{
        let msj;
        if ( `${props.winner}`  === "Ganador Jugador!") {
            msj =  `${props.player} le gana a ${props.ia}`;
        } else if(`${props.winner}` === "Ganador Computadora..."){
            msj =  `${props.ia} le gana a ${props.player}`;
        }else{
            msj = "Sigue intentando..."
        }
        return msj; 
    }

    return(
        <div >
            
            <button type="button"  onClick={props.onClick} class="btn btn-primary" data-toggle="modal" data-target="#myModal" >
                Jugar!
            </button>
            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        
                    
                        <div class="modal-header">
                            <h4 class="modal-title">{props.winner}</h4>
                        </div>

                        <div class="modal-body">
                            <Info />
                        </div>
                        
                        <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Seguir Jugando</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Ganador;