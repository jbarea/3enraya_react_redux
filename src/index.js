import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './styles/index.scss';
import './styles/index.css';
import {
  BrowserRouter, Switch, Route, NavLink,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Tablero from './components/Tablero';
import errorNoEncontrado from './components/Error404';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const Header = () => (
    <header>
        <h1 className="titulo">
        3 en Raya
        </h1>
        <NavLink activeClassName="is-active menu-nav" className="menu-nav" to="/" exact>
        Inicio
        </NavLink>
        <NavLink activeClassName="is-active" to="/jugar" exact>
        Jugar
        </NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/jugar" component={Tablero} exact />
                <Route component={errorNoEncontrado} />
            </Switch>
        </div>
    </BrowserRouter>
);

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.getElementById('root'),
);

registerServiceWorker();
