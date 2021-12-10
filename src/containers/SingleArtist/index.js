/* eslint-disable arrow-body-style */

import { connect } from 'react-redux';

import SingleArtist from 'src/components/SingleArtist';

// withRouter trasnfers a regular component into a high order component
import { withRouter } from 'react-router-dom';
import { findArtist } from 'src/selectors/artists';

// "dispatch" sends to the component SingleArtist what has been retrieved by findArtist
const mapStateToProps = (state, ownProps) => {
  return ({
    artist: findArtist(state.artists.list, ownProps.match.params.slug),
  });
};

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(SingleArtist);

export default withRouter(container);
