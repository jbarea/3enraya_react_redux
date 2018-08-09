import {createStore,combineReducers} from 'redux';
import {casillasReducer} from '../reducers/casillas';
import uuid from 'uuid';

const initialStore = {
    /* casillas: {
        0: ['','',''],
        1: ['','',''],
        2: ['','',''],
    }, */
    casillas: [],
    turno: true,
    gana: undefined,
    lineaGana: undefined,
    empata: false
}

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
       initialStore.casillas.push({
            row: i,
            col: j,
            jug: undefined,
            id: uuid()
        });
    };
};

export default (initialState = initialStore) => {
    const store = createStore(casillasReducer,        
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
    return store;
}