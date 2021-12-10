import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

import { updateMessageField, sendMessage } from '../../actions/contact';

// each field of the form has its own state
const mapStateToProps = (state) => ({
  lastName: state.contact.lastName,
  firstName: state.contact.firstName,
  company: state.contact.company,
  email: state.contact.email,
  phone: state.contact.phone,
  messageObject: state.contact.messageObject,
  message: state.contact.message,
  isValidate: state.contact.validate,
});

const mapDispatchToProps = (dispatch) => ({
  // controlled component
  onFieldChange: (newValue, name) => {
    dispatch(updateMessageField(newValue, name));
  },
  // saves datas given by the user in order to transfer it to the API
  saveSubmit: () => {
    dispatch(sendMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
