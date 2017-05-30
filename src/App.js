import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import PremierLeague from './PremierLeague'
import Github from './Github'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1> API Party</h1>
          </div>
          <ul className="nav-Links">
            <li>
              <NavLink to='/github'> Github API </NavLink>
              <NavLink to='/premierLeague'> Premier League API </NavLink>
            </li>
          </ul>
        </div>
          <Switch>
            <Route path='/premierLeague' component={PremierLeague} />
            <Route path='/github' component={Github} />
            <Route render={() => <p>To get started, click one of the links above</p>} />
          </Switch>
      </div>
    );
  }
}

export default App;
