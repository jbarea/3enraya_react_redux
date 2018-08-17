import { actionTypes } from '../actions/casillas';
import checkJugada from '../controller/gameController';

// import {uuid} from 'uuid';
// import TableroModel from '../models/TableroModel';
// import moment from 'moment';
// const TableroModel = require('../models/TableroModel');
// const mongoose = require('../connections/mongoose');

export const casillasReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD: {
      const { id } = action;
      const newState = state;
      newState.casillas.forEach((elem, index) => {
        if (elem.id === id) {
          newState.casillas[index].jug = newState.turno;
          newState.turno = !newState.turno;
        }
      });
      const res = checkJugada(newState);
      if ((res === 'f1x') || (res === 'f1o') || (res === 'f2x') || (res === 'f2o') || (res === 'f3x') || (res === 'f3o') || (res === 'c1x')
                || (res === 'c1o') || (res === 'c2x') || (res === 'c2o') || (res === 'c3x') || (res === 'c3o') || (res === 'd1x') || (res === 'd1o')
                || (res === 'd2x') || (res === 'd2o')) {
        newState.gana = true;
      }
      let count = 0;
      for (let i = 0; i < 9; i += 1) {
        if ((newState.casillas[i].jug === true) || (newState.casillas[i].jug === false)) {
          count += 1;
        }
      }
      if (count === 9) {
        newState.empata = true;
        count = 0;
      } else {
        newState.empata = false;
        count = 0;
      }

      return { ...newState };
    }
    case actionTypes.RESET: {
      const newState2 = state;
      newState2.casillas.forEach((elem, index) => {
        newState2.casillas[index].jug = undefined;
        newState2.casillas[index].turno = true;
        newState2.gana = undefined;
        newState2.empata = false;
      });
      return { ...newState2 };
    }
    default: return state;
  }
};
