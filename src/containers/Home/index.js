import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { fetchHomeData } from '../../actions/home';

const mapStateToProps = (state) => ({
  loading: state.global.loading,
});

// "dispatch" sends to the component Home what has been retrieved by fetchHomeData
const mapDispatchToProps = (dispatch) => ({
  loadData: () => {
    dispatch(fetchHomeData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
