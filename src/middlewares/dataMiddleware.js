/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable max-len */

import api from '../api';
import {
  FETCH_GLOBAL_DATA,
  setLoadingFalse,
  saveCategories,
} from '../actions/global';

// the middleware calls an action, processes it then sends the result into another one
const dataMiddleware = (store) => (next) => (action) => {
  // changes action type
  switch (action.type) {
    case FETCH_GLOBAL_DATA: {
      const fetchCategories = api.get('/categorie');

      // nothing else is executed before the promise condition is fulfilled
      Promise.all([fetchCategories])
        .then((results) => {

          // fetching categories and storing them
          const categories = results[0];
          store.dispatch(saveCategories(categories.data));

          // the loader state is changing : it disappears when the promise is completed and the App component rendering is starting
          store.dispatch(setLoadingFalse());
        });
    }
      break;
    default:
  }
  
  // the processed action is transfered to the next one
  next(action);
};

export default dataMiddleware;
