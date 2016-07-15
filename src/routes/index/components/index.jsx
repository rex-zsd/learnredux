import {connect} from 'react-redux';
import {doSomething} from '../../../actions/str.js';
import React, {PropTypes} from 'react';
import style from './style.less';
import co from 'co';

const propTypes = {
    str: PropTypes.string.isRequired
};

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {

        var self = this;

        (async () => {
            var res = await this.getData();
            console.log(res);
        })();

        // (async function a() {
        //     const c = await fetch('http://www.baidu.com').then(res => res.text());
        //     console.log(c);
        // })();
        // co(function * () {
        //     const a = yield fetch('http://www.baidu.com').then(res => res.text());
        //     console.log(a);
        // });

    }

    getData() {
        var form = new FormData;
        form.append('FBrokerId', 336);
        return fetch('http://t.yh.120yibao.com/yb/broker/loadAssistantInfo.do', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // body: form,
            body: 'FBrokerId=336'
        }).then(res => res.json());
    }

    handleClick() {
        var p = function() {
            console.log(999);
        }
        this.props.dispatch(doSomething(p));
    }

    render() {
        return (
            <div>
                <div>{this.props.str}</div>
                <button onClick={this.handleClick} className={style.button}>click</button>
            </div>
        )
    }
}

Index.propTypes = propTypes;

function mapStateToprops(store) {
    return {str: store.str};
}

module.exports = connect(mapStateToprops)(Index);
