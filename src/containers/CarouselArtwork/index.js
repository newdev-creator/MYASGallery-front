import { connect } from 'react-redux';

import CarouselArtwork from 'src/components/CarouselArtwork';

const mapStateToProps = (state) => ({
  artworks: state.home.artworks,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselArtwork);
