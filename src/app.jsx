const App = React.createClass({
    render() {
        console.log(this.props.children);
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});
export default App;
