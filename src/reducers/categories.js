import { SAVE_CATEGORIES } from '../actions/global';

const initialState = {
  list: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        list: action.categories,
      };
    default:
      return state;
  }
}

export default reducer;
