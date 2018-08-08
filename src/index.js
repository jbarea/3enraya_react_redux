import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './styles/index.scss';
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './components/Home';
import Tablero from './components/Tablero';
import Error_404 from './components/Error404';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const Header = () => (
    <header>
        <h1>3 en Raya</h1>
        <NavLink activeClassName='is-active' to='/' exact>Inicio</NavLink>
        <NavLink activeClassName='is-active' to='/jugar' exact>Jugar</NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/jugar' component={Tablero} exact/>
                <Route component={Error_404}/>
            </Switch>
        </div>
    </BrowserRouter>
)

const store = configureStore();


ReactDOM.render(
    <Provider store = {store}>
        <AppRouter/>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
