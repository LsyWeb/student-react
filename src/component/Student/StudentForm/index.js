import React, { useState ,useEffect } from 'react'
import { history } from 'umi'
import { message, Spin, Form, Input, Button, Radio, Select } from 'antd'
import { addStudent, updateStudent ,getStudentBysNo } from '../../../services/student'
const { Option } = Select;

export default function index(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  // 如果是修改学生则要回填表单
  useEffect(()=>{
    async function fetch(){
      if(!props.sNo){
        return;
      }
      setIsLoading(true);
      const stuData = await getStudentBysNo(props.sNo);
      setIsLoading(false);
      form.setFieldsValue(stuData)
    }
    fetch();

  },[props.sNo])

  const createOption = () => {
    const options = [];
    for (let i = 1978; i <= 2021; i++) {
      options.push(<Option key={i} value={i}>{i + '年'}</Option>)
    }
    return options;
  }

  async function onFinish(value) {
    console.log('完成了', value);
    if (props.sNo) {//判断是新增还是修改
      setIsLoading(true);
      const res = await updateStudent(value)
      setIsLoading(false);
      if (res.status === 'success') {
        message.success('修改成功', 2);
        history.push('/student')
      } else {
        message.error(`修改失败，错误信息：${res.msg}`, 2)
      }
    } else {
      setIsLoading(true);
      const res = await addStudent(value);
      setIsLoading(false);
      if (res.status === 'success') {
        message.success('添加成功', 2);
        history.push('/student')
      } else {
        message.error(`添加失败，错误信息：${res.msg}`, 2)
      }
    }

  }

  function onFinishFailed(error) {
    console.log(error)
  }

  return (
    <Spin tip="提交中..."  spinning={isLoading}>
      <Form
        // style={{minWidth:400}}
        name="student-form"
        labelCol={{span:6}}
        wrapperCol={{span:16}}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="name" label="姓名" rules={[{ required: true, message: '姓名必填' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item name="sNo" label="学号"  rules={[{ required: true, message: '学号必填' }]}>
          <Input disabled={props.sNo !== undefined}></Input>
        </Form.Item>
        <Form.Item name="sex" label="性别" initialValue={0} rules={[{ required: true, message: '性别必填' }]}>
          <Radio.Group >
            <Radio value={0} >男</Radio>
            <Radio value={1} >女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="birth" label="出生年份" rules={[{ required: true, message: '出生年份必填' }]}>
          <Select>
            {createOption()}
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={
            [{ required: true, message: '邮箱必填' },
            { type: "email", message: '邮箱格式不正确' }]
          }>
          <Input></Input>
        </Form.Item>
        <Form.Item
          name="phone"
          label="手机号"
          rules={
            [{ required: true, message: '手机号必填' },
            { pattern: /^1\d{10}/, message: '手机号格式不正确' }]
          }>
          <Input></Input>
        </Form.Item>
        <Form.Item name="address" label="住址" rules={[{ required: true, message: '住址必填' }]}>
          <Input></Input>
        </Form.Item>
        {/* valuePropName:子节点的值的属性，如 Switch 的是 'checked'，则必须修改。 */}
        {/* <Form.Item name="isMonitor" valuePropName="checked" label="班长" rules={[{ required: true, message: 'isMonitor is required' }]}>
        <Switch></Switch>
      </Form.Item> */}
        <Form.Item wrapperCol={{ xs:{offset:0},sm:{ offset: 6, span: 16 } }}>
          <Button type="primary" htmlType="submit" block >提交</Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}
