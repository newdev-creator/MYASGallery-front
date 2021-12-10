import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == https://masonry.desandro.com/
import Masonry from 'react-masonry-css';
import './artworks.scss';
import { useEffect } from 'react';

const Artworks = ({ artworks, loadData, slug }) => {
  useEffect(() => {
    loadData(slug);
  }, [slug]);

  let title = 'Toutes les œuvres';
  if (slug) {
    title = slug;
  }

  // Breakpoint for Masonry
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  // Use Masonry for the grid https://masonry.desandro.com/layout.html
  return (
    <section className="artwork">
      <h2 className="artwork_title">
        {title}
      </h2>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {artworks.map((artwork) => (
          <div
            className="artwork_photo_grid"
            key={artwork.slug}
          >
            <Link to={`/œuvres/${artwork.slug}`}>
              <div
                className="card"
              >
                <img style={{ objectFit: 'cover', width: '100%' }} alt={artwork.title} src={artwork.pictureUrl} />
                <div className="artwork_name">
                  {artwork.title} <br /> {artwork.artists.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

Artworks.propTypes = {
  artworks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    artists: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  slug: PropTypes.string.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default Artworks;
