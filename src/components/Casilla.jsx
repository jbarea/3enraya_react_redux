import React from 'react';
import CasillaX from './CasillaX';
import CasillaO from './CasillaO';
const Casilla = (props) => {
        console.log(props);
        console.log(props.jug);
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