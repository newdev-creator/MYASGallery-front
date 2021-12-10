/* eslint-disable arrow-body-style */

import { connect } from 'react-redux';

import SingleEvent from 'src/components/SingleEvent';

// withRouter trasnfers a regular component into a high order component
import { withRouter } from 'react-router-dom';
import { findEvent } from 'src/selectors/events';

// "dispatch" sent to the component SingleEvent what has been retrieved by findEvent
const mapStateToProps = (state, ownProps) => {
  return ({
    event: findEvent(state.events.list, ownProps.match.params.slug),
  });
};

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(SingleEvent);

export default withRouter(container);
