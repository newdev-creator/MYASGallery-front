import PropTypes from 'prop-types';

import './contact.scss';
import 'animate.css';
import {
  FloatingLabel,
  Form,
} from 'react-bootstrap';

import Validate from 'src/containers/Contact/Validate';

const Contact = ({
  lastName,
  firstName,
  company,
  email,
  phone,
  messageObject,
  message,
  onFieldChange,
  saveSubmit,
  isValidate,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveSubmit();
  };
  const handleChange = (evt) => {
    onFieldChange(evt.target.value, evt.target.name);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contactez-nous !</h1>
      <div className="phone-contact">
        <h3>Muriel Léorat Cassard</h3>
        <p className="phone">
          <a href="tel:+33675973972" className="phone-number"> +33 675 973 972</a>
        </p>
      </div>
      {isValidate ? <Validate />
        : (
          <>
            <FloatingLabel label="Nom *" className="mb-3 name">
              <Form.Control type="lastName" placeholder="Nom" name="lastName" id="lastName" value={lastName} onChange={handleChange} required />
            </FloatingLabel>
            <FloatingLabel label="Prénom *" className="mb-3 firstname">
              <Form.Control type="firstName" placeholder="Prénom" name="firstName" id="firstName" value={firstName} onChange={handleChange} required />
            </FloatingLabel>
            <FloatingLabel label="(Société)" className="mb-3 company">
              <Form.Control type="company" placeholder="(Société)" name="company" id="company" value={company} onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel label="e-mail *" className="mb-3 email">
              <Form.Control type="email" placeholder="e-mail" name="email" id="email" value={email} onChange={handleChange} required />
            </FloatingLabel>
            <FloatingLabel label="N° de téléphone" className="mb-3 phone">
              <Form.Control type="phone" placeholder="Votre N° de téléphone" name="phone" id="phone" value={phone} onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel label="L'objet de votre message *" className="mb-3 object">
              <Form.Control type="messageObject" placeholder="Objet de votre message" name="messageObject" id="messageObject" value={messageObject} onChange={handleChange} required />
            </FloatingLabel>
            <FloatingLabel label="Votre message *" className="mb-3 message">
              <Form.Control
                type="message"
                placeholder="Votre message"
                as="textarea"
                name="message"
                id="message"
                value={message}
                onChange={handleChange}
                style={{ height: '8em' }}
                required
              />
            </FloatingLabel>

            <div className="send_button">
              <button type="submit">Envoyer</button>
            </div>
          </>
        )}
    </form>

  );
};

Contact.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  messageObject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  saveSubmit: PropTypes.func.isRequired,
  isValidate: PropTypes.bool,
};

Contact.defaultProps = {
  isValidate: false,
};

export default Contact;
