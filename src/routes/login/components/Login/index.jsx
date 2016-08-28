import React, {Component, PropTypes} from 'react';

const propTypes = {};

class a extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    
}
class Login extends Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    componentDidMount() {
        this.props.loginAssistantAsync();
    }

    render() {
        console.log(this.props);
        return (
            <div>
            </div>
        );
    }

}

Login.propTypes = propTypes;

export default Login;
