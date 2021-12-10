import api from '../api';
import { setLoadingFalse } from '../actions/global';
import {
  saveHomeArtists,
  saveHomeArtworks,
  saveHomeEvents,
  FETCH_HOME_DATA,
} from '../actions/home';

// the middleware calls an action, processes it then sends the result into another one
const dataMiddleware = (store) => (next) => (action) => {
  // changes action type
  switch (action.type) {
    case FETCH_HOME_DATA: {
      // GET request to fetch data (via Axios)
      const fetchEvents = api.get('/evenement/by-date?limit=4');
      const fetchArtworks = api.get('/oeuvre?random=5');
      const fetchArtists = api.get('/artiste?random=4');

      // Promise forbid anything to happen before all the datas are fetched
      Promise.all([fetchEvents, fetchArtworks, fetchArtists])
        .then((results) => {
          const events = results[0];
          const artworks = results[1];
          const artists = results[2];

          // saving datas
          store.dispatch(saveHomeEvents(events.data));
          store.dispatch(saveHomeArtworks(artworks.data));
          store.dispatch(saveHomeArtists(artists.data));

          // change the loader state to "false" (component dismounts)
          store.dispatch(setLoadingFalse());
        });
    }
      break;
    default:
  }
  // we transfer the action to next (next middleware or reducer)
  next(action);
};

export default dataMiddleware;
