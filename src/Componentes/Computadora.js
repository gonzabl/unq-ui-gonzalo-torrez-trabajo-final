import React, { useState } from 'react';

function Computadora(props){
    
    return (
        <div>
            <h3>Computadora</h3>
            <br />
            <div><span class="rounded-sm"><img src={props.value} width="25%"/></span></div>
        </div>
    );
} 

export default Computadora;