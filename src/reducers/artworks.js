import { SAVE_ARTWORKS } from '../actions/artworks';

const initialState = {
  list: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ARTWORKS:
      return {
        ...state,
        list: action.artworks,
      };
    default:
      return state;
  }
}

export default reducer;
