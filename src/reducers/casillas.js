import {actionTypes} from '../actions/casillas';

//const defaultState = [];

export const casillasReducer = (state,action) => {
    switch (action.type){
        case actionTypes.ADD:
            console.log(state);
            console.log(action);
            const {id} = action;
            const newState = state;
            //console.log(newState);
          
            newState.casillas.forEach((elem, index, arr)=>{
                if(elem.id===id){
                    newState.casillas[index].jug = newState.turno;
                    newState.turno = !newState.turno;
                }
            })
            return newState;
           
        default: return state;
    }
}