import React from 'react';
import PropTypes from 'prop-types';

const BotonReset = (props) => {
  return (
            <input type="submit" value="Reset" className="botonReset" onClick={() => props.resetGame()} />
  );
};

BotonReset.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

export default BotonReset;
