import React, { Profiler } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon  from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NovoProduto from './pages/NewProduct';

export default function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/cadastro" component={Register} />
                <Route path="/perfil" component={Profile} />
                <Route path="/produto/novo" component={NovoProduto} />
            </Switch>
        </BrowserRouter>
    );
}