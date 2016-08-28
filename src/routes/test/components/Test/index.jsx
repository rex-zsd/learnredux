import React, {Component, PropTypes} from 'react';
import styles from './style.less';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

const propTypes = {
    test: PropTypes.object.isRequired,
};
class Test extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.callback = this.callback.bind(this);
    }

    componentDidMount() {
        this.props.loginAssistantAsync();
    }

    handleClick() {
    }

    callback(key) {
        console.log(key);
    }

    render() {
        const data = this.props.test;
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
                    <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
                    <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
                </Tabs>
                <div className={styles.text}></div>
                hello world! my app.hhhh
                <button onClick={this.handleClick} className={styles.button}>click</button>
            </div>
        )
    }
}

Test.propTypes = propTypes;

export default Test;
