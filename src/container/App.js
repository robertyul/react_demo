import React from 'react';
import { Menu, Icon, Switch, Layout } from 'antd';
import {allMenu}  from "./slibe_menu"
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
                collapsible                       // 左右收缩
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                className="leftMenu"
                trigger={null}
            >
                <span className="author white">牧之</span>
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    defaultOpenKeys={['']}
                    selectedKeys={[this.state.current]}
                    className="menu"
                    mode={this.state.mode}
                >

                    {
                        allMenu.map((subMenu) => {
                            if (subMenu.children && subMenu.children.length) {
                                return (
                                    <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                                        {subMenu.children.map(menu => (
                                            <Menu.Item key={menu.url}>{menu.name}</Menu.Item>
                                        ))}
                                    </SubMenu>
                                )
                            }
                            return (
                                <Menu.Item key={subMenu.url}>
                                        <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                                </Menu.Item>
                            )
                        })
                    }

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
