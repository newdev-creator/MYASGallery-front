/* eslint-disable max-len */
import { SET_LOADING_FALSE } from '../actions/global';

export const initialState = {
  loading: true,
};

// this function allows to dismount the loader component once the data has been saved in the state (and returned to the store)
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
