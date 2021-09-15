import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './src/pages/Home';
import { Dashboard } from './src/pages/Dashboard';

export function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/movies" component={Dashboard}/>
        </BrowserRouter>
    );
}