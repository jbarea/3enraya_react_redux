
function checkJugada(newStat){

    let res = 'undefined';

    if((newStat.casillas[0].jug===true) && (newStat.casillas[1].jug===true) && (newStat.casillas[2].jug ===true)){
        return res = 'f1x';
    }else if((newStat.casillas[0].jug===false) && (newStat.casillas[1].jug===false) && (newStat.casillas[2].jug===false)){
        return res = 'f1o';
    }
        
    if((newStat.casillas[3].jug===true) && (newStat.casillas[4].jug===true) && (newStat.casillas[5].jug===true)){
        return res = 'f2x';
    }else if((newStat.casillas[3].jug===false) && (newStat.casillas[4].jug===false) && (newStat.casillas[5].jug===false)){
        return res = 'f2o';
    }
  
    if((newStat.casillas[6].jug===true) && (newStat.casillas[7].jug===true) && (newStat.casillas[8].jug===true)){
        return res = 'f3x';
    }else if((newStat.casillas[6].jug===false) && (newStat.casillas[7].jug===false) && (newStat.casillas[8].jug===false)){
        return res = 'f3o';
    }

    if ((newStat.casillas[0].jug === true) && (newStat.casillas[3].jug === true) && (newStat.casillas[6].jug === true)) {
        return res = 'c1x';
    } else if ((newStat.casillas[0].jug === false) && (newStat.casillas[3].jug === false) && (newStat.casillas[6].jug === false)) {
        return res = 'c1o';
    } 

    if ((newStat.casillas[1].jug === true) && (newStat.casillas[4].jug === true) && (newStat.casillas[7].jug === true)) {
        return res = 'c2x';
    } else if ((newStat.casillas[1].jug === false) && (newStat.casillas[4].jug === false) && (newStat.casillas[7].jug === false)) {
        return res = 'c2o';
    }

    if ((newStat.casillas[2].jug === true) && (newStat.casillas[5].jug === true) && (newStat.casillas[8].jug === true)) {
        return res = 'c3x';
    } else if ((newStat.casillas[2].jug === false) && (newStat.casillas[5].jug === false) && (newStat.casillas[8].jug === false)) {
        return res = 'c3o';
    } 
    
    if ((newStat.casillas[0].jug === true) && (newStat.casillas[4].jug === true) && (newStat.casillas[8].jug === true)){
        return res = 'd1x';
    }else if((newStat.casillas[0].jug === false) && (newStat.casillas[4].jug === false) && (newStat.casillas[8].jug === false)){
        return res = 'd1o';
    }

    if ((newStat.casillas[6].jug === true) && (newStat.casillas[4].jug === true) && (newStat.casillas[2].jug ===true)){
        return res = 'd2x';
    }else if((newStat.casillas[6].jug === false) && (newStat.casillas[4].jug === false) && (newStat.casillas[2].jug === false)){
        return res = 'd2o';
    }
     
    return res;
}    

module.exports = checkJugada;