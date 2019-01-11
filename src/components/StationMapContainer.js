import React, { Component } from "react";
import StationsMap from "./StationsMap";

export default class StationMapContainer extends Component {
  render() {
    return (
      <StationsMap
        stations={this.props.stations}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBCHOXJzvHtr41MG_9k9-4RRUIK7lZLrvQ&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
