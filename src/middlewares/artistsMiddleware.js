import api from '../api';
import { FETCH_ARTISTS, saveArtists } from '../actions/artists';
import { setLoadingFalse } from '../actions/global';

// the middleware calls an action, processes it then sends the result into another one
const artistsMiddleware = (store) => (next) => (action) => {
  
  // changes action type
  switch (action.type) {
    case FETCH_ARTISTS:
      api.get('/artiste')
        .then((response) => {
          // we fetch artists-related datas and store them
          store.dispatch(saveArtists(response.data));

          // change the loader state to "false" (component dismounts)
          store.dispatch(setLoadingFalse());
        });
      break;
    default:
  }
  // we transfer the action to next (next middleware or reducer)
  next(action);
};

export default artistsMiddleware;
