import { SAVE_EVENTS } from '../actions/events';

const initialState = {
  list: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_EVENTS:
      return {
        ...state,
        list: action.events,
      };
    default:
      return state;
  }
}

export default reducer;
