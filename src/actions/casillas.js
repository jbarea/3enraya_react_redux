// import uuid from 'uuid';

export const actionTypes = {
  ADD: 'PONER_FICHA',
  RESET: 'REINICIAR_JUEGO',
};

export const checkCasilla = id => ({
  type: actionTypes.ADD,
  id,
});

export const resetGame = () => ({
  type: actionTypes.RESET,
});
