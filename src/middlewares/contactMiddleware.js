import api from '../api';

import { SEND_MESSAGE, postValidation } from '../actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
  const contactState = store.getState().contact;

  // we recover the content from contactState.
  const contactForm = {
    lastname: contactState.lastName,
    firstname: contactState.firstName,
    company: contactState.company,
    email: contactState.email,
    phone: contactState.phone,
    messageObject: contactState.messageObject,
    message: contactState.message,
  };

  switch (action.type) {
    case SEND_MESSAGE:
      api.post(
        // URL de l'API
        '/contact',
        contactForm,
      )
        .then((res) => {
          store.dispatch(postValidation(res.data.validate));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:

      // we give the action to next (next middleware or reducer)
      next(action);
  }
};

export default contactMiddleware;
