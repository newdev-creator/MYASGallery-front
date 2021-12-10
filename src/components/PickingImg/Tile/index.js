import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './tile.scss';
import Image from 'src/components/PickingImg/Tile/Image';

const Tile = ({ name, photoUrl, slug }) => (
  <div className="gallery-tile">
    <Link to={`/artistes/${slug}`}>
      <div className="picture-info">
        <h2>{name}</h2>
      </div>
      <Image photo={photoUrl} name={name} CSSClass="tile-image" />
    </Link>
  </div>
);

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Tile;
