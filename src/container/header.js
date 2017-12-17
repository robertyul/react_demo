import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
// import * as screenfull from 'screenfull'
import './header.less'

const SubMenu = Menu.SubMenu
const { Header } = Layout

export default class Top extends React.Component {
    render() {
        return (
            <Header style={{ background: '#fff'}}>
                <Menu mode="horizontal" className="logOut" onClick={this.clear}>
                        <Menu.Item key="logOut"></Menu.Item>
                </Menu>
            </Header>
        );
    }
}