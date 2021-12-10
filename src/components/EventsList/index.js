/* eslint-disable eqeqeq */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './eventsList.scss';
import { useEffect } from 'react';

const EventsList = ({ events, loadData }) => {
  useEffect(() => {
    loadData();
  }, []);
  const dateNow = new Date();

  return (
    <div
      className="list-container"
    >
      <h1 className="title-name">
        Évènements
      </h1>
      <div className="order-list">
        {events.map((event, index) => (
          <div key={event.id} className={`link-events${dateNow.toISOString() > event.dateEnd ? '-over' : ''}`}>
            <div className={`event-container-${index % 2 == true ? 'right' : 'left'}`}>
              <div className="event">
                <img
                  className="event-picture"
                  src={event.pictureUrl}
                  alt="event"
                />
                <h3 className="event-city">{event.town}</h3>
              </div>

              <Link
                to={`/evenements/${event.slug}`}
                className="link"
              >
                <table className="event-description">
                  <tr>
                    <th>
                      <h4 className="event-name">{event.name}</h4>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <div className="event-date">
                        <Moment date={event.date} format="DD/MM/YYYY" />
                        &nbsp; - &nbsp;
                        <Moment date={event.dateEnd} format="DD/MM/YYYY" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="event-place"><strong>lieu : </strong>{event.roadNumber}, {event.roadName}<br />{event.roadName2}<br />{event.zipCode} {event.town}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="description-break">{event.information}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="event-link"><em>Voir plus...</em></p>
                    </td>
                  </tr>
                </table>
              </Link>
              <div className="event-link">
                <button type="button" className="button-link"><a href={event.link}>réservez</a></button>
              </div>
            </div>
          </div>

        ))}

        <div className="event-present-past">
          <h3>Nous étions présent :</h3>
          {/** events sort by dateEnd with classeName over */}
        </div>

      </div>
    </div>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    town: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dateEnd: PropTypes.string,
    link: PropTypes.string.isRequired,
    roadNumber: PropTypes.number.isRequired,
    roadName: PropTypes.string.isRequired,
    roadName2: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
  })).isRequired,
  loadData: PropTypes.func.isRequired,
};

export default EventsList;
