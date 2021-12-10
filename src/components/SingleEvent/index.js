// import
import './singleEvent.scss';
import { Redirect, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Page from 'src/components/Page';
import Map from 'src/components/SingleEvent/Map';
import Moment from 'react-moment';
import api from 'src/api';

const SingleEvent = () => {
  // We get the artist slug from url
  const { slug } = useParams();

  // We initialise the artist object state
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // On load only, we fetch the artist data and set it in the artist object.
  useEffect(() => {
    api.get(`/evenement/${slug}`)
      .then((response) => {
        setEvent(response.data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  const mapWidth = '100%';

  if (!isLoading && error) {
    return <Redirect to="/not-found" />;
  }

  return (
    !isLoading && (
      <Page>
        <div className="single-event">
          <h1 className="title-name-event">
            {event.name} - {event.town}
          </h1>

          <img
            className="photo-event"
            src={event.pictureUrl}
            alt="event"
          />

          <div className="event-description">
            <p>
              {event.information}
            </p>
          </div>
          <div className="event-info">
            <h3>{event.town}, {event.country}</h3>

            <h4>
              <Moment date={event.date} format="DD/MM/YYYY" />
              &nbsp; - &nbsp;
              <Moment date={event.dateEnd} format="DD/MM/YYYY" />
            </h4>

            <p>{event.roadNumber}, {event.roadName}</p>
            <p>{event.roadName2}</p>
            <p>{event.zipCode} {event.town}</p>
            <div className="event-artists">
              <p>les artistes présents à l'évènement :</p>
              <ul className="event-list-artists">
                {event.artists.map((artist) => (
                  <Link
                    key={artist.id}
                    to={`/artistes/${artist.slug}`}
                  >
                    <li>
                      {artist.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="event-link">
            <Link to="/contact" className="link-event-info">Demande d'information &#9658;</Link>
            <button type="button">
              <a href={event.link}>Réservez</a>
            </button>
          </div>
          <div className="googlemap">
            <Map
              {...event}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '30rem', width: mapWidth }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>
        </div>
      </Page>
    )
  );
};

export default SingleEvent;
