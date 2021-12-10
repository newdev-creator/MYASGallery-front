/* eslint-disable arrow-body-style */

import { connect } from 'react-redux';

import SingleArtwork from 'src/components/SingleArtwork';

// withRouter trasnfers a regular component into a high order component
import { withRouter } from 'react-router-dom';
import { findArt } from 'src/selectors/arts';

// "dispatch" sent to the component SingleArtwork what has been retrieved by findArt
const mapStateToProps = (state, ownProps) => {
  return ({
    artwork: findArt(state.artworks.list, ownProps.match.params.slug),
  });
};

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(SingleArtwork);

export default withRouter(container);
