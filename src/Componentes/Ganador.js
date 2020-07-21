import React from 'react';

function Ganador(props){

    return(
        <div >
            
            <button type="button"  onClick={props.onClick} class="btn btn-primary" data-toggle="modal" data-target="#myModal" >
                Jugar
            </button>
            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        
                        <div class="modal-body">
                            {props.winner}
                        </div>
                        
                        <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Ganador;