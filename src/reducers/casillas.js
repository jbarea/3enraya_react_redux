import {actionTypes} from '../actions/casillas';

//const defaultState = [];

export const casillasReducer = (state,action) => {
    switch (action.type){
        case actionTypes.ADD:
            console.log(state);
            const {id} = action;
            const newState = state;
            
            newState.casillas.foreach((elem, index, arr)=>{
                if(elem.id===id){
                    newState.casillas[index].jug = newState.turno;
                    newState.turno = !newState.turno;
                    return newState;
                }
            })

        default: return state;
    }
}