import React, { Component } from "react";
import { Marker } from "react-google-maps";
import evstationIcon from "../evstation.png";

export default class StationMarker extends Component {
  render() {
    return <Marker position={this.props.location} icon={evstationIcon} />;
  }
}
