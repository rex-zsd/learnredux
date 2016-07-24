import React, {Component, PropTypes} from 'react';

const propTypes = {};

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  componentDidMount() {
    this.props.loginAsync();
  }

  render() {
    return (
      <div>
        {this.props.user.body}
      </div>
    );
  }

}

Login.propTypes = propTypes;

export default Login;
