import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { history } from './history';
import { NavBar } from './cmps/NavBar';
import { UserMessage } from './cmps/UserMessage';
import { Teams } from './pages/Teams';
import { TeamDetails } from './pages/TeamDetails'



export function App() {
  return (
    <div className="football-cont">
      <NavBar></NavBar>
      <Router history={history}>
        <Switch>
          <Route exact path="/football-app/" component={Teams} />
          <Route path="/football-app/team/:id" component={TeamDetails} />
        </Switch>
      </Router>
      <UserMessage></UserMessage>
    </div>
  );
}