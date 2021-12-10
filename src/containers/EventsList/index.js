import { connect } from 'react-redux';

import EventsList from 'src/components/EventsList';

import { fetchEvents } from '../../actions/events';

const mapStateToProps = (state) => ({
  events: state.events.list,
});
// "dispatch" sent to the component EventsList what has been retrieved by fetchEvents
const mapDispatchToProps = (dispatch) => ({
  loadData: () => {
    dispatch(fetchEvents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
