import {connect} from 'react-redux';
import {doSomething} from '../../../actions/str.js';
import React, {PropTypes} from 'react';
import style from './style.less';
console.log(style);
const Index = React.createClass({
    propTypes: {
        str: React.PropTypes.string.isRequired
    },
    componentDidMount() {
        // this.props.dispatch(doSomething('123'));
        const test = function(str) {
            return new Promise((resolve, reject) => {
                resolve(str);
            });
        };
        var t = test();
        t.then(function() {
            console.log(this);
            console.log('sucessful');
        });

        async function a() {
            var c = await fetch('http://www.baidu.com').then(res => res.text());
            return c;
        }
        // a().then(res => {
        //     console.log(res.slice(0, 2));
        // });
        // const my = function* () {
        //     const a = yield test('123');
        // };
        // var m = my();
        // m.next();
    },
    click() {
        var p = function() {
            console.log(999);
        }
        this.props.dispatch(doSomething(p));
    },
    render() {
        return (
            <div>
                <div>{this.props.str}</div>
                <button onClick={this.click} className={style.button}>click</button>
            </div>
        )
    }
});

module.exports = connect((state, ownProps) => ({str: state.str}))(Index);
