import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import ClubInfo from './ClubInfo'
import './PremierLeague.css'

class PremierLeague extends Component {
  render = () => {
    return (
      <div className="premierLeague">
        <img className="premierLeague-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1280px-Premier_League_Logo.svg.png" alt="premierLeague" />

        <h2>Select a Club</h2>
        <ul className="nav-Links">
          <li>
            <NavLink to='/premierLeague/Southampton'>Southampton</NavLink>
          </li>
          <li>
            <NavLink to='/premierLeague/Arsenal'>Arsenal</NavLink>
          </li>
          <li>
            <NavLink to='/premierLeague/ManchesterUnited'>Manchester United</NavLink>
          </li>
        </ul>

        <Route exact path={this.props.match.url} render={() => (
          <h2>No club selected.</h2>
        )} />
        
        <Route path={`${this.props.match.url}/:club`} component={ClubInfo}/>
      
      </div>
    )
  }
}

export default PremierLeague