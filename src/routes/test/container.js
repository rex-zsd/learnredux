import Test from './components/Test';
import { loginAssistantAsync } from './thunk';
import { connect } from 'react-redux';

const mapActionCreators = {
  loginAssistantAsync
};

function mapStateToprops(state) {
  return { test: state.test };
}

export default connect(mapStateToprops, mapActionCreators)(Test);
