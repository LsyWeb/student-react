import React from 'react'
import { Row, Col, Card } from 'antd'
import { TinyArea, TinyColumn, Pie, Column } from '@ant-design/charts'
import { areaConfig, visitsData, stuTotalData, stuUpdataData, stuDeleteData, stuSexData, birthConfig, pieConfig, birthData } from './data'
import './index.css'
export default function Header(props) {

  return (
    <>
      <Row className="home-header" gutter={16} justify="center">
        <Col xs={24} sm={12} md={6} className="card-item">
          <Card title={(
            <>
              <span style={{ color: '#999', fontSize: 14 }}>访问量</span>
              <h2>8,343</h2>
              <TinyArea {...areaConfig} data={visitsData}></TinyArea>
            </>
          )}
            hoverable loading={false}
            bodyStyle={{ padding: '10px 20px' }}
          >
            日访问量 129
        </Card>
        </Col>
        <Col xs={24} sm={12} md={6} className="card-item">
          <Card title={
            <>
              <span style={{ color: '#999', fontSize: 14 }}>学生总数</span>
              <h2>238</h2>
              <TinyColumn {...areaConfig} data={stuTotalData} areaStyle={{ fill: 'rgb(221, 203, 246)' }}></TinyColumn>
            </>
          }
            hoverable loading={false}
            bodyStyle={{ padding: '10px 20px' }}
          >
            今日新增 2
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6} className="card-item">
          <Card title={(
            <>
              <span style={{ color: '#999', fontSize: 14 }}>修改学生信息次数</span>
              <h2>831</h2>
              <TinyArea {...areaConfig} data={stuUpdataData}></TinyArea>
            </>
          )}
            hoverable loading={false}
            bodyStyle={{ padding: '10px 20px' }}
          >
            日修改量 12
        </Card>
        </Col>
        <Col xs={24} sm={12} md={6} className="card-item" >
          <Card title={(
            <>
              <span style={{ color: '#999', fontSize: 14 }}>删除学生</span>
              <h2>31</h2>
              <TinyArea {...areaConfig} data={stuDeleteData}></TinyArea>
            </>
          )}
            hoverable loading={false}
            bodyStyle={{ padding: '10px 20px' }}
          >
            今日删除 2
        </Card>
        </Col>
      </Row>
      <Row className="home-content" gutter={16} justify="center">
        <Col xs={24} sm={16} className="card-item">
          <Card title="学生年龄分布" >
            <Column {...birthConfig} data={birthData}></Column>
          </Card>
        </Col>
        <Col xs={24} sm={8} className="card-item">
          <Card title="学生性别分布" >
            <Pie {...pieConfig} data={stuSexData}></Pie>
          </Card>
        </Col>
      </Row>
    </>
  )
}
