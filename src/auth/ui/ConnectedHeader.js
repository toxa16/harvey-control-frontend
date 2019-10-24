import { connect } from 'react-redux';

import Header from './Header';

function mapStateToProps(state) {
  return {
    status: state.auth.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default ConnectedHeader;
