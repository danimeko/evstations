import React, { Component } from "react";
import StationsMap from "./StationsMap";
import Loading from "react-loading-bar";
import "react-loading-bar/dist/index.css";
import { connect } from "react-redux";
import { featchLocation } from "../actions/feachStationAction";

class Locations extends Component {
  componentDidMount() {
    this.props.featchLocation();
  }

  render() {
    const { loading, stations } = this.props;

    return (
      <div>
        <Loading show={loading} color="red" />
        <StationsMap
          stations={stations}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB308OAwh8rv0c1nH07VCJWJvTv4t2uOXk&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.stations.loading,
  stations: state.stations.stations,
  error: state.stations.error
});

const mapActionToProps = {
  featchLocation
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Locations);
