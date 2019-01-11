import React, { Component } from "react";
import StationsMap from "./StationsMap";
import Loading from "react-loading-bar";
import "react-loading-bar/dist/index.css";

class Locations extends Component {
  state = {
    stations: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.featchLocation();
  }

  featchLocation() {
    var targetUrl = "https://api.virta.fi/v4/stations";
    fetch(targetUrl)
      .then(responce => responce.json())
      .then(data =>
        this.setState({
          stations: data,
          isLoading: false
        })
      );
  }

  onShow = () => {
    this.setState({ isLoading: true });
  };

  onHide = () => {
    this.setState({ isloading: false });
  };

  render() {
    console.log(this.state.stations);
    const { isLoading, stations } = this.state;
    return (
      <div>
        <Loading show={this.state.isLoading} color="red" />
        {!isLoading && (
          <StationsMap
            stations={stations}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBCHOXJzvHtr41MG_9k9-4RRUIK7lZLrvQ&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `600px`, width: `100%` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        )}
      </div>
    );
  }
}

export default Locations;
