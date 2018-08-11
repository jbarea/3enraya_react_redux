import {actionTypes} from '../actions/casillas';
import {checkTurno} from '../controller/gameController';
//const defaultState = [];

export const casillasReducer = (state,action) => {
    switch (action.type){
        case actionTypes.ADD:
            console.log(state);
            const {id} = action;
            const newState = state;
            
            newState.casillas.forEach((elem, index, arr)=>{
                if(elem.id===id){
                    console.log(elem)
                    console.log(index)
                    newState.casillas[index].jug = newState.turno;
                    newState.turno = !newState.turno;
                }
            })
            
            // const res = checkTurno(newState);
            // if (res === true){

            // }
            return {...newState};
           
        default: return state;
    }
}