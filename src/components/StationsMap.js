import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import StationMarker from "./StationMarker";

const StationsMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.stations.map(station => (
      <StationMarker
        key={station.id}
        location={{ lat: station.latitude, lng: station.longitude }}
        onClick={ () =>
          console.log("hello")
        }
      />
    ));

    return (
      <GoogleMap defaultZoom={12} center={{ lat: 60.19, lng: 24.93 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default StationsMap;
