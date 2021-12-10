import './validate.scss';
import validate from './check-mark-10120.svg';

const Validate = () => (
  <div className="validate-post">
    <p>Votre message à bien été envoyé, <br />
      vous allez recevoir une confirmation par mail.
      <br />
      <span>Merci</span>
    </p>
    <img src={validate} alt="validate" />
  </div>
);

export default Validate;
