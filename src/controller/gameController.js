const resF1 = function comprobarFila1(newStat){
    let fila1 = 'undefined';

    if((newStat.casillas[0].jug===true) && (newStat.casillas[1].jug===true) && (newStat.casillas[2]===true)){
        fila1 = true;
    }else if((newStat.casillas[0].jug===false) && (newStat.casillas[1].jug===false) && (newStat.casillas[2].jug===false)){
        fila1 = false;
    }else{
        fila1 = 'undefined';
    }
    return fila1;
}

const resF2 = function comprobarFila2(newStat){
    let fila2 = 'undefined';
    
    if((newStat.casillas[3].jug===true) && (newStat.casillas[4].jug===true) && (newStat.casillas[5].jug===true)){
        fila2 = true;
    }else if((newStat.casillas[3].jug===false) && (newStat.casillas[4].jug===false) && (newStat.casillas[5].jug===false)){
        fila2 = false;
    }else{
        fila2 = 'undefined';
    }
    return fila2;
}

const resF3 = function comprobarFila3(newStat){
    let fila3 = 'undefined';
    
    if((newStat.casillas[6].jug===true) && (newStat.casillas[7].jug===true) && (newStat.casillas[8].jug===true)){
        fila3 = true;
    }else if((newStat.casillas[6].jug===false) && (newStat.casillas[7].jug===false) && (newStat.casillas[8].jug===false)){
        fila3 = false;
    }else{
        fila3 = 'undefined';
    }
    return fila3;
}
let col1 = 'undefined';
let col2 = 'undefined';
let col3 = 'undefined';
const resCol1 = function comprobarCol1(newStat){
    if ((newStat.casillas[0].jug === true) && (newStat.casillas[3].jug === true) && (newStat.casillas[6].jug === true)) {
        col1 = true;
    } else if ((newStat.casillas[0].jug === false) && (newStat.casillas[3].jug === false) && (newStat.casillas[6].jug === false)) {
        col1 = false;
    } else {
        col1 = 'undefined';
    }
    return col1;
}

const resCol2 = function comprobarCol2(newStat){
    if ((newStat.casillas[1].jug === true) && (newStat.casillas[4].jug === true) && (newStat.casillas[7].jug === true)) {
        col2 = true;
    } else if ((newStat.casillas[1].jug === false) && (newStat.casillas[4].jug === false) && (newStat.casillas[7].jug === false)) {
        col2 = false;
    } else {
        col2 = 'undefined';
    }
    return col2;
}

const resCol3 = function comprobarCol3(newStat){
    if ((newStat.casillas[2].jug === true) && (newStat.casillas[5].jug === true) && (newStat.casillas[8].jug === true)) {
        col3 = true;
    } else if ((newStat.casillas[2].jug === false) && (newStat.casillas[5].jug === false) && (newStat.casillas[8].jug === false)) {
        col3 = false;
    } else {
        col3 = 'undefined';
    }
    return col3;
}

function checkTurno(){
    if (resF1===true){
        return 'f1x';
    }else if(resF1===false){
        return 'f1o';
    }

    if(resF2===true){
        return 'f2x';
    }else if(resF2===false){
        return 'f2o';
    }

    if(resF3===true){
        return 'f3x';
    }else if(resF3===false){
        return 'f3o';
    }

    if(resCol1===true){
        return 'c1x';
    }else if(resCol2===false){
        return 'c1o';
    }

    if(resCol2===true){
        return 'c2x';
    }else if(resCol2===false){
        return 'c2o';
    }

    if(resCol3===true){
        return 'c3x';
    }else if(resCol3===false){
        return 'c3o'
    }
    
}

module.exports = checkTurno;