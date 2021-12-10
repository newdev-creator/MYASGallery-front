// merges all reducers and generates a single one (rootReducer)
import { combineReducers } from 'redux';

import homeReducer from './home';
import eventsReducer from './events';
import artistsReducer from './artists';
import artworksReducer from './artworks';
import globalReducer from './global';
import contactReducer from './contact';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  global: globalReducer,
  home: homeReducer,
  events: eventsReducer,
  artists: artistsReducer,
  artworks: artworksReducer,
  contact: contactReducer,
  categories: categoriesReducer,
});

export default rootReducer;
