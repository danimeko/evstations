
const feach_stations = "FEACH_STATIONS";
const feach_begin = "FEACH_BEGIN";
const feach_failure = "FEACH_FAILURE";

//featch locations function  despachs when it begins, on sucess and on failure

 export function featchLocation() {
  return dispatch => {
    dispatch(fetchBegin());
    return fetch("https://api.virta.fi/v4/stations")
      .then(responce => responce.json())
      .then(data => {
        dispatch(fetchSuccess(data));
      })
      .catch(error => dispatch(fetchFailure(error)));
  };
}


// begin action
export const fetchBegin = () => ({ type: feach_begin });
// success action
export const fetchSuccess = stations => ({
  type: feach_stations,
  payload: { stations: stations }
});
// failer action
export const fetchFailure = error => ({
  type: feach_failure,
  payload: { error }
});

