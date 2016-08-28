import Login from './components/Login';
import { connect } from 'react-redux';

//组织异步action方法
const mapActionCreators = {

};
//组织注入变量
function mapStateToprops(state) {
  return {
    aesKey: state.user.aesKey
  }
}
//注入方法与变量
export default connect(mapStateToprops, mapActionCreators)(Login);
