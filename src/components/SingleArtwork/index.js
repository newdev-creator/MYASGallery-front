import { Link, Redirect, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Page from 'src/components/Page';
import api from 'src/api';

// import
import './singleArtwork.scss';

const SingleArtwork = () => {
  // We get the artist slug from url
  const { slug } = useParams();

  // We initialise the artist object state
  const [artwork, setArtwork] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // On load only, we fetch the artist data and set it in the artist object.
  useEffect(() => {
    api.get(`/oeuvre/${slug}`)
      .then((response) => {
        setArtwork(response.data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  if (!isLoading && error) {
    return <Redirect to="/not-found" />;
  }

  return (
    !isLoading && (
      <Page>
        <section className="single-artwork">
          <h1 className="title-name-artwork">{artwork.title}</h1>
          <div className="card-artwork">
            <img
              className="photo-artwork"
              src={artwork.pictureUrl}
              alt=""
            />
            <aside className="label-artwork">
              <h3 className="artist-name">{artwork.artists.name}</h3>
              <p className="specificity"> {artwork.specificity}</p>
              <p>Dimensions : {artwork.width}/{artwork.height}/{artwork.depth}</p>
            </aside>
          </div>
          <div className="artwork-description">
            <p>
              {artwork.description}
            </p>
          </div>
          <div className="link-artist">
            <Link to={`/artistes/${artwork.artists.slug}`}>
              Voir l'artiste &#9658;
            </Link>
            <Link to="/contact">Demande d'information &#9658;</Link>
          </div>
        </section>
      </Page>
    )
  );
};

export default SingleArtwork;
