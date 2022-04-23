import React from 'react'
import { history } from 'umi'
import { Form, Input, Button, Row, Col} from 'antd'
import './index.css'

export default function index(props) {

  const onFinish = (value) => {
    props.onLogin && props.onLogin(value.account, value.password)
  }
  return (
    <div className="login-container">
      <Row>
        <Col xs={{offset:0,span:24}} sm={{offset:6,span:16}}>
          <h2>登录</h2>
        </Col>
      </Row>
      <Form

        name="basic"
        labelCol={{ xs:{span: 6} ,sm:{span:0}} }
        wrapperCol={{ xs:{span: 24},sm:{ span:16 }}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="账号"
          name="account"
          rules={[{ required: true, message: '账号' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请填写密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ xs:{offset:0, span: 16 },  sm:{ offset:6, span: 16 }}}>
          <Button type="primary" htmlType="submit" block>
            登录
        </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ xs:{offset:0, span: 16 }, sm:{ offset:6, span: 16 }}}>
          <Button type="default" block onClick={() => {
            history.push('/logon')
          }}>
            注册
        </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
