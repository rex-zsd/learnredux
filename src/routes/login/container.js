import Login from './components/Login';
import { connect } from 'react-redux';
import { loginAsync } from './thunk';

const mapActionCreators = {
  loginAsync
};

function mapStateToprops(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToprops, mapActionCreators)(Login);
