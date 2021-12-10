import { connect } from 'react-redux';

import PickingImg from 'src/components/PickingImg';

import { fetchArtists } from '../../actions/artists';

const mapStateToProps = (state) => ({
  artists: state.home.artists,
});

// "dispatch" sent to the component PickingImg what has been retrieved by fetchArtists
const mapDispatchToProps = (dispatch) => ({
  loadArtists: () => {
    dispatch(fetchArtists());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PickingImg);
