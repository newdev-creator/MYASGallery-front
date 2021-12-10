import { SAVE_ARTISTS } from '../actions/artists';

const initialState = {
  list: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ARTISTS:
      return {
        ...state,
        list: action.artists,
      };
    default:
      return state;
  }
}

export default reducer;
