import {connect} from 'react-redux';
import {doSomething} from '../actions.js';
const Index = React.createClass({
    propTypes: {
        str: React.PropTypes.array.isRequired
    },
    componentDidMount() {
        // this.props.dispatch(doSomething('123'));
    },
    render() {
        console.log(this.props);
        // this.props.dispatch(doSomething('123'));
        return (
            <div>123</div>
        )
    }
});

// module.exports = Index;
module.exports = connect(
    (state, ownProps) => ({
        str: state.str
    })
)(Index);
