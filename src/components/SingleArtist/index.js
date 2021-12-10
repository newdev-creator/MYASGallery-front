import Masonry from 'react-masonry-css';
// import
import { Link, Redirect, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Page from 'src/components/Page';
import './singleArtist.scss';
import api from 'src/api';

const SingleArtist = () => {
  // We get the artist slug from url
  const { slug } = useParams();

  // We initialise the artist object state
  const [artist, setArtist] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // On load only, we fetch the artist data and set it in the artist object.
  useEffect(() => {
    api.get(`/artiste/${slug}`)
      .then((response) => {
        setArtist(response.data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  if (!isLoading && error) {
    return <Redirect to="/not-found" />;
  }

  return (
    !isLoading && (
      <Page>
        <div className="single-artist">
          <h1 className="title-name-artiste">
            {artist.name}
          </h1>

          <img
            className="photo-artist"
            src={artist.photoUrl}
            alt="artiste"
          />
          <article className="artist-bio">
            <p>{artist.biography}</p>
          </article>
          <section className="list-artwork-artist">
            <h3 className="list-artwork-artist-title">
              Les œuvres
              de l'artiste &#x2192;
            </h3>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {artist.artworks.map((artwork) => (
                <div
                  className="list-artwork-artist-grid"
                  key={artwork.pictureName}
                >
                  <Link to={`/œuvres/${artwork.slug}`}>
                    <div
                      className="card"
                    >
                      <img style={{ objectFit: 'cover', width: '100%' }} alt={artwork.pictureName} src={artwork.pictureUrl} />
                      <div className="artwork_name">
                        {artwork.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Masonry>
          </section>
        </div>
      </Page>
    )
  );
};

export default SingleArtist;
