import React from 'react'
import {Layout} from 'antd'
const {Sider} = Layout
import './index.less'
export default function index(props) {
  return (
    <div className="layout-container">
        <div className="header">
          {props.header}
        </div>
        <div className="main">
          <Sider className="menu"
            breakpoint="md"
            collapsedWidth="0"
          >
            {props.menu}
          </Sider>
          <div className="content">
          {props.content}
          </div>
        </div>
      </div>
  )
}
