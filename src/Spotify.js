import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './Spotify.css'

class Spotify extends Component {
    render = () => {
        return (
            <div className="spotify">
                <img className="spotify-logo" src="http://pixel.nymag.com/imgs/daily/vulture/2015/06/26/26-spotify.w1200.h630.jpg" alt="spotify" />


            </div>
        )
    }
}

export default Spotify