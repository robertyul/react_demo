import React from 'react';
import { Menu, Icon, Switch, Layout } from 'antd'
import './App.less';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout


export default class App extends React.Component {
    state = {
        theme: 'dark',
        current: 'index',
        collapsed: false,
        mode: 'inline',  // 水平垂直展现
    }
    render() {
    return (
        <Layout className="containAll">
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                className="leftMenu"
            >
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    defaultOpenKeys={['']}
                    selectedKeys={[this.state.current]}
                    className="menu"
                    mode={this.state.mode}
                >

                    <Menu.Item >  </Menu.Item>

                </Menu>
                <div className="switch">
                    <Switch
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                </div>
            </Sider>
            <Layout>
            </Layout>
        </Layout>
    );
    }
}
