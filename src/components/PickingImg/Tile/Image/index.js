import PropTypes from 'prop-types';

import './image.scss';

const Image = ({ photo, name }) => (
  <img className="image" src={photo} alt={name} />
);

Image.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Image;
