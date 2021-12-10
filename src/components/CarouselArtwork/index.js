import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useState } from 'react';

// == https://react-slideshow.herokuapp.com/
import { Fade } from 'react-slideshow-image';
import './carousel.scss';

const CarouselArtwork = ({ artworks }) => {
  // State for carousel
  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  // Properties for react-slidesshow
  const properties = {
    autoplay: true,
    indicators: true,
    prevArrow: <div style={{ width: '30px', marginRight: '-30px' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#a17715"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></div>,
    nextArrow: <div style={{ width: '30px', marginLeft: '-30px' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#a17715"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></div>,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next);
    },
  };

  // use backgroundImage for dynamisation
  // .slice(0, 5): use for get the 5 first elements of array artworks
  return (
    <div>
      <div className="carousel">
        <Fade {...properties}>
          {artworks.map((artwork) => (
            <div className="each-fade" key={artwork.id}>
              <Link
                to={`/œuvres/${artwork.slug}`}
              >
                <div className="image-container" style={{ backgroundImage: `url(${artwork.pictureUrl})`, backgroundSize: 'contain' }} />
              </Link>
            </div>
          ))}
        </Fade>

      </div>
    </div>
  );
};

CarouselArtwork.propTypes = {
  artworks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })).isRequired,
};

export default CarouselArtwork;
