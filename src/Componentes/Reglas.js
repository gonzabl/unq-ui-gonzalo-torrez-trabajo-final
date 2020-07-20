import React from 'react';
import reglas from '../img/reglas.png';

function Reglas(){
    return(
        <div>
            <h3>Reglas:</h3> 
            <img src={reglas} className="reglas" alt="reglas" />
        </div>
    );
};

export default Reglas;