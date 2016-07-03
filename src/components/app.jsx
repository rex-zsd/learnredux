import './app.less';
import Link from 'react-router/lib/Link';
import React, {PropTypes} from 'react'
// import 'normalize.css';
// import 'antd/dist/antd.css';
import {Menu, Breadcrumb, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

const AsideCollapse = React.createClass({
    getInitialState() {
        return {collapse: true};
    },
    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse
        })
    },
    render() {
        const collapse = this.state.collapse;
        return (
            <div className={collapse
                ? "ant-layout-aside ant-layout-aside-collapse"
                : "ant-layout-aside"}>
                <aside className="ant-layout-sider">
                    <div className="ant-layout-logo"></div>
                    <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
                        <SubMenu key="sub1" title={< span > <Icon type="mail"/> < span > 导航一 < /span></span >}></SubMenu>
                        <Menu.Item key="user">
                            <Link to="/">
                                <Icon type="user"/>
                                <span className="nav-text">导航一</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="setting">
                            <Link to="/user">
                                <Icon type="setting"/>
                                <span className="nav-text">导航二</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="laptop">
                            <Icon type="laptop"/>
                            <span className="nav-text">导航三</span>
                        </Menu.Item>
                        <Menu.Item key="notification">
                            <Icon type="notification"/>
                            <span className="nav-text">导航四</span>
                        </Menu.Item>
                        <Menu.Item key="folder">
                            <Icon type="folder"/>
                            <span className="nav-text">导航五</span>
                        </Menu.Item>
                    </Menu>
                    <div className="ant-aside-action" onClick={this.onCollapseChange}>
                        {collapse
                            ? <Icon type="right"/>
                            : <Icon type="left"/>}
                    </div>
                </aside>
                <div className="ant-layout-main">
                    <div className="ant-layout-header"></div>
                    <div className="ant-layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                            <Breadcrumb.Item>某应用</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            <div style={{
                                height: 220
                            }}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div className="ant-layout-footer">
                        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = AsideCollapse;
// ReactDOM.render(<BrowserDemo><AsideCollapse /></BrowserDemo>, mountNode);
