import React from 'react';

const  BotonReset = (props) => {
    return(
        
            <input type="submit" value="Reset" className="botonReset" onClick={() => props.resetGame}></input>
        
    )
}

export default BotonReset;