import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { history } from './history';
import { NavBar } from './cmps/NavBar';
import { UserMessage } from './cmps/UserMessage';
import { Teams } from './pages/Teams';
import { TeamDetails } from './pages/TeamDetails'



export function App() {
  return (
    <div className="football-cont">
      <NavBar></NavBar>
      <BrowserRouter basename="/football-app" history={history}>
        <Switch>
          <Route exact path="/" component={Teams} />
          <Route path="/team/:id" component={TeamDetails} />
        </Switch>
      </BrowserRouter>
      <UserMessage></UserMessage>
    </div>
  );
}