import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import dataMiddleware from 'src/middlewares/dataMiddleware';
import contactMiddleware from 'src/middlewares/contactMiddleware';
import artistsMiddleware from 'src/middlewares/artistsMiddleware';
import homeMiddleware from 'src/middlewares/homeMiddleware';
import artworksMiddleware from 'src/middlewares/artworksMiddleware';
import eventsMiddleware from 'src/middlewares/eventsMiddleware';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// enhancers combines several middlewares to optimize their management
const enhancers = composeEnhancers(
  applyMiddleware(
    dataMiddleware,
    contactMiddleware,
    homeMiddleware,
    artistsMiddleware,
    artworksMiddleware,
    eventsMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
