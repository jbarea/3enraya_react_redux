import {actionTypes} from '../actions/casillas';
import checkJugada from '../controller/gameController';
import TableroModel from '../models/TableroModel';
import moment from 'moment';

//const mongoose = require('../connections/mongoose');

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
                    //codigo temporal para guardado en base de datos
                    const asyncDB = async () => {
                        try{
                            await TableroModel.remove({});
                            const TableroModel = await new TableroModel({
                                casillas_: [{
                                    row: newState.casillas[index].pos,
                                    pos: newState.casillas[index].row,
                                    col: newState.casillas[index].jug,
                                    jug: newState.casillas[index].jug,
                                    id: newState.casillas[index].id,
                                }],
                                turno: newState.casillas[index].turno,
                                gana: newState.casillas[index].gana,
                                empata: newState.casillas[index].empata,
                                date: moment().format()
                            }).save();                        
                        }catch(err){
                            throw new Error(err);
                        }
                    }
                    asyncDB();
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
            
            let count = 0;
            for (let i=0;i<9;i++){
                if((newState.casillas[i].jug === true) || (newState.casillas[i].jug === false)){
                    count++;
                }
            }
            if(count===9){
                newState.empata = true;
                count = 0;
            }else{
                newState.empata = false;
                count = 0;
            }

            return {...newState};

        case actionTypes.RESET:
            console.log(action)
            console.log('inicializacion de estado mediante boton: ');
           
            
            return true

        default: return state;
    }
}