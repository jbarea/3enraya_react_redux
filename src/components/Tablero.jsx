import React, {Component} from 'react';
import {connect} from 'react-redux';


import Casilla from '../components/Casilla';
import '../styles/index.scss';
import '../styles/index.css';
import {checkCasilla} from '../actions/casillas';


class Tablero extends Component { 
   
    render(){
        return (
            <div className="exterior">
            <div><p>Ahora juega {this.props.turno}</p></div>
                <div className="tablero">
                {console.log('Tablero inicializado!!!!')}
                    {/* <div className="casilla" id="1" onClick={(e)=>this.handleOnClick(e)}>1</div>
                    <div className="casilla" id="2" onClick={(e)=>this.handleOnClick(e)}>2</div>
                    <div className="casilla" id="3" onClick={(e)=>this.handleOnClick(e)}>3</div>
                    <div className="casilla" id="4" onClick={(e)=>this.handleOnClick(e)}>4</div>
                    <div className="casilla" id="5" onClick={(e)=>this.handleOnClick(e)}>5</div>
                    <div className="casilla" id="6" onClick={(e)=>this.handleOnClick(e)}>6</div>
                    <div className="casilla" id="7" onClick={(e)=>this.handleOnClick(e)}>7</div>
                    <div className="casilla" id="8" onClick={(e)=>this.handleOnClick(e)}>8</div>
                    <div className="casilla" id="9" onClick={(e)=>this.handleOnClick(e)}>9</div> */}
                    {
                           this.props.casillas.map(subElement => {
                               return(
                                   <Casilla
                                        checkCasilla={this.props.checkCasilla}
                                        key={subElement.id}
                                        {...subElement}
                                   />
                               )
                           })
                    }
                </div>
                <div className="botonCentrado">
                    <input type="submit" value="Reset" className="botonReset"></input>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        casillas: state.casillas,
        turno: state.turno,
        gana: state.gana,
        lineaGana: state.lineaGana,
        empata: state.empata
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        checkCasilla: (id) => dispatch(checkCasilla(id))
     })
}

export default connect(mapStateToProps,mapDispatchToProps)(Tablero); 
