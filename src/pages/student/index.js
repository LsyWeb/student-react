import React from 'react'
import './index.css'
import Pager from '../../component/container/StudentPager'
import StudentTable from '../../component/container/StudentTable'
import StudentSearch from '../../component/container/StudentSearch'

function student() {
  
  return (
    <div className="student-container">
      <StudentSearch />
      <StudentTable />
      <Pager style={{ marginTop: 20, textAlign: 'right' }}></Pager>
    </div>
  )
}
student.title = '学生列表';
student.wrappers = ['@/route/PrivateRoute'];

export default student;