import { connect } from 'react-redux';

import Carousel from 'src/components/Carousel';

import { fetchEvents } from '../../actions/events';

const mapStateToProps = (state) => ({
  events: state.home.events,
});

const mapDispatchToProps = (dispatch) => ({
  loadEvents: () => {
    dispatch(fetchEvents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
