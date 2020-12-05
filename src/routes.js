import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Starter from './pages/starter';
import Ender from './pages/ender';
import { Link } from 'react-router-dom'
import Menu from './components/menu';

const Routes = () => (
    <BrowserRouter>
        {/* Switch garante que cada endereço chame só uma rota por vez */}
        <Menu />
        <Switch>
            <Route path="/" exact component={Starter}/>
            <Route path="/ender" component={Ender}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;