import React from 'react';
import { BrowserRouter as Router , Routes as Switch, Route } from 'react-router-dom';
import { Home } from '../../pages';


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Home/>}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;
