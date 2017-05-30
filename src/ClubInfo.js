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

//     componentWillMount = () => {
//     this.fetchClubData(this.props)
//   }

//   componentWillReceiveProps(nextProps) {
//     const locationChanged = nextProps.location !== this.props.location;
//     if (locationChanged) {
//       this.fetchRoverData(nextProps);
//     }
//   }

//   fetchClubData(props) {
//     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.match.params.rover}/photos?earth_date=${photoDates[props.match.params.rover]}&camera=fhaz&api_key=DEMO_KEY`)
//       .then(res => res.json())
//       .then(data => {
//         const rover = {
//           imageUrl: data.photos[0].club.name,
//           location: data.photos[0].img_src,
//           yearFounded: data.photos[0].earth_date
//         }
//         this.setState({club})
//       })
//       .catch(err => console.warn(err))
//   }
    
    render () {
        return (
            <div>



            </div>
        )
    }
}

export default ClubInfo