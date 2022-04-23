import React from 'react'
import StudentForm from '../../component/Student/StudentForm'

function detial(props) {
  const sNo = props.match.params.sNo;
  console.log(sNo)
  return (
    <div style={{width:800,margin:'50px auto'}}>
      <StudentForm sNo={sNo}></StudentForm>
    </div>
  )
}
detial.title = '学生详情';
detial.wrappers = ['@/route/PrivateRoute'];

export default detial; 