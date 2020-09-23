import axios from 'axios';
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'


function requestApps() {
  return {
    type: REQUEST_APPS
  }
}

function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    apps: json
  }
}

function fetchApps(data) {
  return dispatch => {
    dispatch(requestApps())
    return axios
      .get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${data.successfullLaunch}&land_success=${data.successfullLanding}&launch_year=${data.selectedYear}`
      )

      .then((response) => {
        dispatch(receiveApps(response.data))
      });
  }
}

export function fetchAppsIfNeeded(data) {
  return dispatch=>{
    dispatch(fetchApps(data))
  }
}
