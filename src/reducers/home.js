import { SAVE_HOME_ARTISTS, SAVE_HOME_EVENTS, SAVE_HOME_ARTWORKS } from '../actions/home';

const initialState = {
  artists: [],
  events: [],
  artworks: [],
};

// datas are transfered to the store so the Home component can be rendered
function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_HOME_ARTISTS:
      return {
        ...state,
        artists: action.artists,
      };
    case SAVE_HOME_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    case SAVE_HOME_ARTWORKS:
      return {
        ...state,
        artworks: action.artworks,
      };
    default:
      return state;
  }
}

export default reducer;
