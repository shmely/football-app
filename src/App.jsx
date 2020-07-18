import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
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
          <Route exact path="/football-app">
            <Redirect to="/football-app/team" />
          </Route>
          <Route path="/football-app/team/:id" component={TeamDetails} />
          <Route path="/football-app/team" component={Teams} />

        </Switch>
      </Router>
      <UserMessage></UserMessage>
    </div>
  );
}