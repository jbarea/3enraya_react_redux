//import uuid from 'uuid';

export const actionTypes = {
    ADD: 'PONER_FICHA',
    RESET: 'REINICIAR_JUEGO',
    
}

export const checkCasilla = (id,jug) => {
    return {
        type: actionTypes.ADD,
        id,
        jug
    }
}

export const resetearJuego = () => {
    
}