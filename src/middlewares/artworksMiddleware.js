import api from '../api';
import { FETCH_ARTWORKS, saveArtworks } from '../actions/artworks';
import { setLoadingFalse } from '../actions/global';

// the middleware calls an action, processes it then sends the result into another one
const artworksMiddleware = (store) => (next) => (action) => {

    // changes action type
  switch (action.type) {
    case FETCH_ARTWORKS: {
      let endpoint = '/oeuvre';
      if (action.slug) {
        endpoint += `/categorie/${action.slug}`;
      }
      api.get(endpoint)
        .then((response) => {
          // we fetch arworks-related datas and store them
          store.dispatch(saveArtworks(response.data));

          // change the loader state to "false" (component dismounts)
          store.dispatch(setLoadingFalse());
        });
      break;
    }

    default:
  }
  // we give the action to next (next middleware or reducer)
  next(action);
};

export default artworksMiddleware;
