import { combineReducers } from "redux";

import stationReducers from "./stationReducers";

export default combineReducers({
    stations: stationReducers
});
