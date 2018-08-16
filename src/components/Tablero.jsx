import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Casilla from '../components/Casilla';
import BotonReset from '../components/BotonReset';
import '../styles/index.scss';
import '../styles/index.css';
import { checkCasilla, resetGame } from '../actions/casillas';

class Tablero extends Component {
  render() {
    return (
      <div className="exterior">
        {
                    this.props.turno
                      ? <div className="estadoJuego">
                      <p>
                          Ahora juega X
                      </p>
                        </div>
                      : <div className="estadoJuego">
                        <p>
                            Ahora juega O
                        </p>
                        </div>
         }
        <div className="tablero">
                { console.log('Tablero inicializado!!!!') }
                { console.log(this.props.state) }
                    {
                 this.props.casillas.map((subElement) => {
                   return (
                         <Casilla
                           checkCasilla={this.props.checkCasilla}
                           key={subElement.id}
                           {...subElement}
                         />
                   );
                 })
                    }
        </div>
        {
          this.props.gana
            ? <div className="ganador">
              <p>
                Has ganado!!!, Pulsa reset para volver a empezar!
                    </p>
            </div>
            : ''
        }
        {
          this.props.empata && !this.props.gana
            ? <div className="empate">
              <p>
                Empate!!!, Pulsa reset para volver a empezar!
                    </p>
            </div>
            : ''
        }
                <div className="botonCentrado">
                    <BotonReset resetGame={this.props.resetGame} />
                </div>
                
      </div>
    );
  }
}

// Tablero.propTypes = {
//   casillas: PropTypes.arrayOf.isRequired,
//   turno: PropTypes.bool.isRequired,
//   gana: PropTypes.bool.isRequired,
//   empata: PropTypes.bool.isRequired,
//   checkCasilla: PropTypes.func.isRequired,
//   resetGame: PropTypes.func.isRequired,
//   state: PropTypes.objectOf.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    casillas: state.casillas,
    turno: state.turno,
    gana: state.gana,
    empata: state.empata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    checkCasilla: id => dispatch(checkCasilla(id)),
    resetGame: () => dispatch(resetGame()),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Tablero);
