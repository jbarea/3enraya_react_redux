import uuid from 'uuid';
import { createStore } from 'redux';
import { casillasReducer } from '../reducers/casillas';

const initialStore = {
  casillas: [],
  turno: true,
  gana: undefined,
  empata: false,
};

for (let i = 0; i < 3; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    initialStore.casillas.push({
      row: i,
      col: j,
      jug: undefined,
      id: uuid(),
    });
  }
}

export default (initialState = initialStore) => {
  const store = createStore(casillasReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};
