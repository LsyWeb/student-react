import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Popconfirm, message } from 'antd'
import { history } from 'umi'
import './index.css'
export default class StudentTable extends Component {
  static propTypes = {
    stuList: PropTypes.array.isRequired
  }

  render() {
    const columns = [
      {
        width:150,
        title: '学号',
        dataIndex: 'sNo',
        align: 'center',
        // fixed:'left',
      },
      {
        width:100,
        title: '姓名',
        dataIndex: 'name',
        align: 'center',
        // fixed:'left',
      },
      {
        width:100,
        title: '性别',
        dataIndex: 'sex',
        align: 'center',
        render(text) {
          return text === 0 ? '男' : '女'
        }
      },
      {
        width: 200,
        title: '邮箱',
        dataIndex: 'email',
        align: 'center',
        responsive:['sm']
      },
      {
        width: 150,
        title: '手机号',
        dataIndex: 'phone',
        align: 'center',
      },
      {
        width: 150,
        title: '地址',
        dataIndex: 'address',
        align: 'center',
        responsive:['sm']
      },
      {
        width: 200,
        title: '操作',
        align: 'center',
        fixed:'right',
        render: (stu) => {
          return (
            <>
              <Button type="primary" style={{ marginRight: 5 }} onClick={() => {
                history.push(`/student/${stu.sNo}`)
              }}>修改</Button>

              <Popconfirm
                title={`您确定要删除学号为: ${stu.sNo} 的学生吗？`}
                okText="确定"
                okType="primary"
                cancelText="取消"
                onCancel={() => { message.warning('取消删除') }}
                onConfirm={async() => { 
                  const res =await this.props.onDelete(stu.sNo);
                  console.log(res)
                  if(res.status === 'success'){
                    message.success(res.msg);
                  }else{
                    message.error(res.msg)
                  }
                }}
              >
                <Button type="primary" danger >删除</Button>
              </Popconfirm>
            </>
          )
        }
      }
    ];
    return (
      <Table
        scroll={{ x: 600 }}
        dataSource={this.props.stuList}
        pagination={false}
        rowKey='id'
        columns={columns}
        loading={this.props.isLoading}
      />
    )
  }
}
