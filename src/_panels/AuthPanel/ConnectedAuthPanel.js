import { connect } from 'react-redux';

import AuthPanel from './AuthPanel';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedAuthPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPanel);

export default ConnectedAuthPanel;
