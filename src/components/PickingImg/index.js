import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Tile from 'src/components/PickingImg/Tile';
import './pickingImg.scss';

const PickingImg = ({ artists }) => (
  <section>
    <div className="section_title">
      <h2 className="title">Artistes</h2>
    </div>
    <div className="gallery fadeIn">
      {artists.map((artist) => (
        <Tile key={artist.id} {...artist} />
      ))}
    </div>
    <div className="link">
      <Link to="/artistes" className="link-artists">voir tous les artistes &#9658;</Link>
    </div>
  </section>
);

PickingImg.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default PickingImg;
