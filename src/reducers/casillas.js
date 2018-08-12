import {actionTypes} from '../actions/casillas';
import checkJugada from '../controller/gameController';
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
            
            const res = checkJugada(newState);
            if ((res === 'f1x')||(res === 'f1o')||(res === 'f2x')||(res === 'f2o')||(res === 'f3x')||(res === 'f3o')||(res === 'c1x')
                ||(res === 'c1o')||(res === 'c2x')||(res === 'c2o')||(res === 'c3x')||(res === 'c3o')||(res === 'd1x')||(res === 'd1o')
                ||(res === 'd2x')||(res === 'd2o')){
                newState.gana = true;
            }else if (res === 'undefined'){
                console.log('todavia no hay victoria por ninguna de las partes');
            }
                        
            return {...newState};
           
        default: return state;
    }
}