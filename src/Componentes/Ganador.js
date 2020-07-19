import React  from 'react';

function Ganador(){

    // const Win = () => {
    //     return(
    //         <div class="alert alert-success alert-dismissible">
    //             <button type="button" class="close" data-dismiss="alert">&times;</button>
    //             <strong>Ganador!</strong>
    //         </div>
    //     );
    // }

    return (
        <div>
            <button onClick={() => alert("Ganador")}>Jugar</button>
        </div>
    );
} 

export default Ganador;