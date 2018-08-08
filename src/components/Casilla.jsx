import React from 'react';
import CasillaX from './CasillaX';
import CasillaO from './CasillaO';
const Casilla = (props) => {
        return(
            <div className="casilla" onClick={props.checkCasilla(props.id)}>
            {
                typeof props.owner === 'undefined' ?
                '_' : props.owner ?
                <CasillaX/> : <CasillaO/>
            }
            </div>
        )
}

export default Casilla;