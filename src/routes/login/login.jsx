import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const propTypes = {};

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        123
      </div>
    );
  }

}

Login.propTypes = propTypes;

function mapStateToprops(store) {
  return {};
}

module.exports = connect(mapStateToprops)(Login);
