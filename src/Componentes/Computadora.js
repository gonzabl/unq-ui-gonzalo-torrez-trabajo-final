import React from 'react';

function Computadora(props){
    
    return (
        <div>
            <h3>Computadora</h3>
            <img src={props.img} alt="cpuImg" width="20%"/>
        </div>
    );
} 

export default Computadora;