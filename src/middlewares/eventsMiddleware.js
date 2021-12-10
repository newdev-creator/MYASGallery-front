import api from '../api';
import { FETCH_EVENTS, saveEvents } from '../actions/events';
import { setLoadingFalse } from '../actions/global';

// the middleware calls an action, processes it then sends the result into another one
const eventsMiddleware = (store) => (next) => (action) => {
  // changes action type
  switch (action.type) {
    case FETCH_EVENTS:
      api.get('/evenement/by-date')
        .then((response) => {
          // we fetch events-related datas and store them
          store.dispatch(saveEvents(response.data));

          // change the loader state to "false" (component dismounts)
          store.dispatch(setLoadingFalse());
        });
      break;
    default:
  }
  // we give the action to next (next middleware or reducer)
  next(action);
};

export default eventsMiddleware;
