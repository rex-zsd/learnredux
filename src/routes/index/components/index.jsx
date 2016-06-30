import {connect} from 'react-redux';
import {doSomething} from '../../../actions/str.js';

const Index = React.createClass({
    propTypes: {
        str: React.PropTypes.string.isRequired
    },
    componentDidMount() {
        // this.props.dispatch(doSomething('123'));
    },
    click() {
        this.props.dispatch(doSomething('aaa'));
    },
    render() {
        return (
            <div>
                <div>{this.props.str}</div>
                <button onClick={this.click}>click</button>
            </div>
        )
    }
});

module.exports = connect(
    (state, ownProps) => ({
        str: state.str
    })
)(Index);
