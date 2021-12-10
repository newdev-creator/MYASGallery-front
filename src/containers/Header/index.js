import { connect } from 'react-redux';

import Header from 'src/components/Header';

// isOpen refers to the state of the burger menu : open (isOpen = true) or closed (isOpen = false)
const mapStateToProps = (state) => ({
  categories: state.categories.list,
  isOpen: state.global.navBarIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
