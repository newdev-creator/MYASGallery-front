import PropTypes from 'prop-types';

// https://tomchentw.github.io/react-google-maps/
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(({ isMarkerShown, latitude, longitude }) => {
  const floatLat = parseFloat(latitude);
  const floatLng = parseFloat(longitude);

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: floatLat, lng: floatLng }}
    >
      {isMarkerShown && <Marker position={{ lat: floatLat, lng: floatLng }} />}
    </GoogleMap>
  );
}));

Map.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};

export default Map;
