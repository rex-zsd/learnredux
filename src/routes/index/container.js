import Index from './components/Index';
import { getDataAsync } from './thunk';
import { connect } from 'react-redux';

const mapActionCreators = {
  getDataAsync
};

function mapStateToprops(state) {
  return { index: state.index };
}

export default connect(mapStateToprops, mapActionCreators)(Index);
