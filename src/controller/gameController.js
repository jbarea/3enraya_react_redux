function checkJugada(newStat) {
  let res = 'undefined';

  if ((newStat.casillas[0].jug === true) && (newStat.casillas[1].jug === true)
  && (newStat.casillas[2].jug === true)) {
    res = 'f1x';
    return res;
  }

  if ((newStat.casillas[0].jug === false) && (newStat.casillas[1].jug === false)
  && (newStat.casillas[2].jug === false)) {
    res = 'f1o';
    return res;
  }

  if ((newStat.casillas[3].jug === true) && (newStat.casillas[4].jug === true)
  && (newStat.casillas[5].jug === true)) {
    res = 'f2x';
    return res;
  }

  if ((newStat.casillas[3].jug === false) && (newStat.casillas[4].jug === false)
  && (newStat.casillas[5].jug === false)) {
    res = 'f2o';
    return res;
  }

  if ((newStat.casillas[6].jug === true) && (newStat.casillas[7].jug === true)
  && (newStat.casillas[8].jug === true)) {
    res = 'f3x';
    return res;
  }

  if ((newStat.casillas[6].jug === false) && (newStat.casillas[7].jug === false)
  && (newStat.casillas[8].jug === false)) {
    res = 'f3o';
    return res;
  }


  if ((newStat.casillas[0].jug === true) && (newStat.casillas[3].jug === true)
  && (newStat.casillas[6].jug === true)) {
    res = 'c1x';
    return res;
  }

  if ((newStat.casillas[0].jug === false) && (newStat.casillas[3].jug === false)
  && (newStat.casillas[6].jug === false)) {
    res = 'c1o';
    return res;
  }

  if ((newStat.casillas[1].jug === true) && (newStat.casillas[4].jug === true)
  && (newStat.casillas[7].jug === true)) {
    res = 'c2x';
    return res;
  }
  if ((newStat.casillas[1].jug === false) && (newStat.casillas[4].jug === false)
  && (newStat.casillas[7].jug === false)) {
    res = 'c2o';
    return res;
  }

  if ((newStat.casillas[2].jug === true) && (newStat.casillas[5].jug === true)
  && (newStat.casillas[8].jug === true)) {
    res = 'c3x';
    return res;
  }
  if ((newStat.casillas[2].jug === false) && (newStat.casillas[5].jug === false)
  && (newStat.casillas[8].jug === false)) {
    res = 'c3o';
    return res;
  }

  if ((newStat.casillas[0].jug === true) && (newStat.casillas[4].jug === true)
  && (newStat.casillas[8].jug === true)) {
    res = 'd1x';
    return res;
  }
  if ((newStat.casillas[0].jug === false) && (newStat.casillas[4].jug === false)
  && (newStat.casillas[8].jug === false)) {
    res = 'd1o';
    return res;
  }

  if ((newStat.casillas[6].jug === true) && (newStat.casillas[4].jug === true)
  && (newStat.casillas[2].jug === true)) {
    res = 'd2x';
    return res;
  }

  if ((newStat.casillas[6].jug === false) && (newStat.casillas[4].jug === false)
  && (newStat.casillas[2].jug === false)) {
    res = 'd2o';
    return res;
  }
  return res;
}

module.exports = checkJugada;
