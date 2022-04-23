import React from 'react'
import { Button, Tooltip, Row, Col } from 'antd'
import { LoginOutlined } from '@ant-design/icons';
import './index.css'

export default function index(props) {
  return (
    <Row className="header-container" justify="space-between" align="middle">
      <Col xs={0} md={6} >
        <h1>学生管理系统</h1>
      </Col>
      <Col sm={6} md={0}>
        <h1>学生管理</h1>
      </Col>
      <Col xs={{ span: 0 }} md={{ offset: 0, span: 6 }} >
        <Row justify="end">
          <span style={{ textAlign: "center" }}>欢迎</span>
          <span style={{ textAlign: "center" }}>{props.username}</span>
          <Tooltip title="退出登录">
            <Button ghost shape="circle" icon={<LoginOutlined />} size="small" onClick={() => {
              props.onLoginOut()
            }}></Button>
          </Tooltip>
        </Row>
      </Col>
      <Col xs={4} md={0} style={{ textAlign: "center" }}>
        <Tooltip title="退出登录">
          <Button ghost shape="circle" icon={<LoginOutlined />} size="small" onClick={() => {
            props.onLoginOut()
          }}></Button>
        </Tooltip>
      </Col>
    </Row>
  )
}
