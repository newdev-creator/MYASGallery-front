/* eslint-disable max-len */

// this reducer is made to gather the informations sent by the user in the contact form and send them to the DB

import {
  UPDATE_MESSAGE_FIELD,
  POST_VALIDATION,
} from '../actions/contact';

// we setup the initial state of each field of the form (empty strings)
const initialState = {
  lastName: '',
  firstName: '',
  company: '',
  email: '',
  phone: '',
  messageObject: '',
  message: '',
  validate: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_MESSAGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

      // we send the new content field to API
      // after the POST request has been sent successfully, the field states values return to an empty string
    case POST_VALIDATION:
      return {
        ...state,
        lastName: '',
        firstName: '',
        company: '',
        email: '',
        phone: '',
        messageObject: '',
        message: '',
        // the "validate" prop turns to "true" so the validation message can show up instead of the form
        validate: true,
      };
    default:
      return state;
  }
};

export default reducer;
