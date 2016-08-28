// import './app.less';
import styles from './style.less';
import Link from 'react-router/lib/Link';
import React, {PropTypes} from 'react'
import {Menu, Breadcrumb, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            defaultSelectedKeys: [props.location.pathname]
        };

        this.onCollapseChange = this.onCollapseChange.bind(this);
    }

    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        const collapse = this.state.collapse;
        return (
            <div className={collapse ? styles.collapse : ''}>
                <aside className={styles.aside}>
                    <div className={styles.logo}></div>
                    <Menu mode="inline" theme="light" defaultSelectedKeys={this.state.defaultSelectedKeys} className={styles.menu}>
                        <Menu.Item key="/test">
                            <Link to="/test">
                                <Icon type="android" />
                                <span className={styles.text}>导航一</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/user">
                            <Link to="/user">
                                <Icon type="setting"/>
                                <span className={styles.text}>导航二</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/login">
                            <Link to="/login">
                                <Icon type="laptop"/>
                                <span className={styles.text}>导航三</span>
                            </Link>

                        </Menu.Item>
                        <Menu.Item key="notification">
                            <Icon type="notification"/>
                            <span className={styles.text}>导航四</span>
                        </Menu.Item>
                        <Menu.Item key="folder">
                            <Icon type="folder"/>
                            <span className={styles.text}>导航五</span>
                        </Menu.Item>
                    </Menu>
                    <div className={styles.action} onClick={this.onCollapseChange}>
                        {collapse
                            ? <Icon type="right"/>
                            : <Icon type="left"/>}
                    </div>
                </aside>
                <article className={styles.article}>
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            {this.props.children}
                        </div>
                    </div>
                </article>
            </div>
        );
    }

}

module.exports = App;
