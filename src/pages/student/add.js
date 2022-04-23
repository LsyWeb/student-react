import React from 'react'
import StudentForm from '../../component/Student/StudentForm'
import {Row,Col} from 'antd'
function add() {
  return (
    <Row justify="center" style={{padding:30}}>
      <Col xs={20} sm={{span:12}}>
        <StudentForm></StudentForm>
      </Col>
    </Row>
  )
}
add.title = '新增学生';
add.wrappers = ['@/route/PrivateRoute'];
export default add;