/* eslint-disable max-len */

import { connect } from 'react-redux';

import Validate from 'src/components/Contact/Validate';

// this container is in charge of displaying (or not) the validation message once the form has been sent
const mapStateToProps = (state) => ({
  isValidate: state.contact.validate,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Validate);
