import React, { Component } from 'react'

class Locations extends Component {
    state = {
         stations : {}
    }
    
    componentDidMount() {
        this.featchLocation()
    }

    featchLocation() {
        fetch("https://api.virta.fi/v4/stations")
            .then(responce => responce.json())
            .then(data => this.setState({
                stations : data
            }));
    }
    render() {
      console.log(this.state.stations)
    return (
      <div>
        Rendered
      </div>
    )
  }
}

export default Locations