import React from 'react';
import CasillaX from './CasillaX';
import CasillaO from './CasillaO';

const Casilla = (props) => {
        //console.log('Casilla: ',props);
        //console.log('Jugador X activado!',props.jug)
        return(
            <div className="casilla" onClick={()=>props.checkCasilla(props.id)}>
            {
                typeof props.jug === 'undefined' ?
                '' : props.jug ?
             <CasillaX/> : <CasillaO/>
            
            }
            </div>
        )
}

export default Casilla;