import { connect } from 'react-redux';

import ArtistsList from 'src/components/ArtistsList';

import { fetchArtists } from 'src/actions/artists';

const mapStateToProps = (state) => ({
  artists: state.artists.list,
});

// "dispatch" sends to the component ArtistsList what has been retrieved by fetchArtists
const mapDispatchToProps = (dispatch) => ({
  loadData: () => {
    dispatch(fetchArtists());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsList);
