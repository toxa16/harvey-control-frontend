import { connect } from 'react-redux';
import Panel from './Panel';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Panel);

export default ConnectedPanel;
