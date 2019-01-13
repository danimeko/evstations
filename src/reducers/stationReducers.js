const feach_stations = "FEACH_STATIONS";
const feach_begin = "FEACH_BEGIN";
const feach_failure = "FEACH_FAILURE";

const intitalState = {
  loading: false,
  stations: [],
  error: null
};

export default function stationReducers(state = intitalState, action) {
  switch (action.type) {
    case feach_begin:
      return { ...state, loading: true, error: null };
      case feach_stations:
      return { ...state, stations: action.payload.stations, loading: false };

    case feach_failure:
      return { ...state, loading: null, error: action.payload.error };
    default:
      return state;
  }
}
