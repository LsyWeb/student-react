import React from 'react'
import { history } from 'umi'
import { Form, Input, Button , Row, Col, message} from 'antd'
import './index.css'
import {studentRegister} from '../../services/student'

export default function logon(props) {
  const onLogon = async (value) =>{
    const result = await studentRegister(value);
    console.log(result);
    if(result.status == 'success'){
      message.success(result.msg);

    }else{
      message.error(result.msg);
    }
  }
  const onFinish = (value) => {
    console.log(value)
    onLogon(value)
  }
  return (
    <div className="logon-container">
      <Row >
        <Col xs={{offset:0,span:24}} sm={{offset:6,span:16}}>
          <h2>注册</h2>
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
          rules={[{ required: true, message: '请填写账号' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请填写用户名' }]}
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
        <Form.Item
          label="确认密码"
          name="rePassword"
          rules={[{ required: true, message: '请确认密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ xs:{offset:0, span: 16 },  sm:{ offset:6, span: 16 }}}>
          <Button type="primary" htmlType="submit" block>
            注册
        </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ xs:{offset:0, span: 16 },  sm:{ offset:6, span: 16 }}}>
          <Button type="default" block onClick={() => {
            history.push('/login')
          }}>
            登录
        </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

