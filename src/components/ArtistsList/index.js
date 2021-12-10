/* eslint-disable eqeqeq */

// sets up redirections to other components
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

import './artistsList.scss';

const ArtistsList = ({ artists, loadData }) => {
  useEffect(() => {
    // fetching artists data
    loadData();
  }, []);

  // eslint-disable-next-line max-len
  // line 29: ternary operator to modify the className in order to display a list item on the right or on the left (odd = picture on the left, even = picture on the right)
  // we use a modulot (%) to define if the component is even or odd
  return (
    <div className="list-container">
      <h1 className="title-name">
        Artistes
      </h1>
      {artists.map((artist, index) => (
        <div key={artist.id}>
          <Link to={`/artistes/${artist.slug}`} className="link-artist">

            <div className={`artist-container-${index % 2 == true ? 'right' : 'left'}`}>

              <div className="artist">
                <img
                  className="artist-picture"
                  src={artist.photoUrl}
                  alt="artist"
                />
                <h3 className="artist-name">{artist.name}</h3>
              </div>

              <div className="artist-description">
                <h3 className="biography">Biographie</h3>
                <p className="description-break">{artist.biography}
                </p>
                <p><em>Voir plus...</em></p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

// validating props
ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      biography: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loadData: PropTypes.func.isRequired,
};

export default ArtistsList;
