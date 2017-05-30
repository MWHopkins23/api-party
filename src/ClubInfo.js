import React, { Component } from 'react'
import './ClubInfo.css'

class ClubInfo extends Component {
    state = {
        club: {
            imageUrl: '',
            location: '',
            yearFounded: '',
        }
    }

    componentWillMount = () => {
    this.fetchClubData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location;
    if (locationChanged) {
      this.fetchRoverData(nextProps);
    }
  }
    
    render () {
        return (
            <div>



            </div>
        )
    }
}

export default ClubInfo