import { connect } from 'react-redux';

import Artworks from 'src/components/Artworks';
import { fetchArtworks } from 'src/actions/artworks';

const mapStateToProps = (state, ownProps) => ({
  artworks: state.artworks.list,
  slug: ownProps.match ? ownProps.match.params.slug : false,
});

// "dispatch" sends to the component Artworks what has been retrieved by fetchArtworks
const mapDispatchToProps = (dispatch) => ({
  loadData: (slug) => {
    dispatch(fetchArtworks(slug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);
