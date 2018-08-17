import React from 'react';
import PropTypes from 'prop-types';
import CasillaX from './CasillaX';
import CasillaO from './CasillaO';

const Casilla = (props) => {
  // console.log('Casilla: ',props);
  // console.log('Jugador X activado!',props.jug)
  return (
            <button type="button" className="casilla" onClick={() => props.checkCasilla(props.id)}>
            {
                typeof props.jug === 'undefined'
                  ? '' : props.jug
                    ? <CasillaX /> : <CasillaO />
            }
            </button>
  );
};

Casilla.propTypes = {
  checkCasilla: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  jug: PropTypes.bool.isRequired,
};

export default Casilla;
