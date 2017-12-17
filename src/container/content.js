import React from 'react';
import { Route ,HashRouter } from 'react-router-dom'
import { Layout } from 'antd'
import Album from '../page/album'
import './content.less'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <HashRouter>
          <Route path="/album" component={Album} />
        </HashRouter>
      </Content>
    );
  }
}