import {connect} from 'react-redux';
import {doSomething} from '../../../actions/str.js';

const Index = React.createClass({
    propTypes: {
        str: React.PropTypes.string.isRequired
    },
    componentDidMount() {
        this.props.dispatch(doSomething('123'));
    },
    render() {
        return (
            <div>123</div>
        )
    }
});

module.exports = connect(
    (state, ownProps) => ({
        str: state.str
    })
)(Index);
