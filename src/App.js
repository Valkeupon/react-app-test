import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/index.js';
import Admin from './admin/index.js';
import Update from './update/index.js';
import NotFound from './notFound/index.js';


const RouterKapsul = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/update/:id" component={Update}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
)
export default RouterKapsul;
