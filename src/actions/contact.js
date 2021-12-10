export const UPDATE_MESSAGE_FIELD = 'UPDATE_MESSAGE_FIELD';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const POST_VALIDATION = 'POST_VALIDATION';

// function to display in the form the new state (which changes when the user writes)
// in the controlled component
export const updateMessageField = (newValue, name) => ({
  type: UPDATE_MESSAGE_FIELD,
  value: newValue,
  name: name,
});

// function to send message
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

// displays a box to inform the user that the message has been sent
export const postValidation = (isValidate) => ({
  type: POST_VALIDATION,
  isValidate: isValidate,
});
