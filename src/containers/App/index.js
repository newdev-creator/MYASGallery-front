// allows to apply mapStateToProps and mapDispatchToProps to the App component
import { connect } from 'react-redux';

import App from 'src/components/App';

// import the action in charge of fetching the data needed everywhere on the website
import { fetchGlobalData } from '../../actions/global';

// the state is put inside a prop
const mapStateToProps = (state) => ({
  loading: state.global.loading,
});

// modify the state throught the action fetchGlobalData
const mapDispatchToProps = (dispatch) => ({
  loadGlobalData: () => {
    dispatch(fetchGlobalData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
