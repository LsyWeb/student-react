import React, { Component } from 'react'
import { Row, Col, Input, Radio, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
export default class StudentSearch extends Component {
  constructor(props) {
    super(props);
    const def = { search: '', sex: -1 }
    this.state = Object.assign({}, def, this.props.defaultValue)
  }

  searchSubmit = () => {
    this.props.searchSubmit && this.props.searchSubmit(this.state);
  }

  render() {
    return (
      <Row className="student-search" style={{ marginBottom: '10px' }} justify="start" gutter={20}>
        <Col style={{marginBottom:10}}>
          <Input value={this.state.key} placeholder="请输入关键字" onChange={(e) => {

            this.setState({
              search: e.target.value
            })
            if (e.target.value === '') {
              this.searchSubmit()
            }
          }}></Input>
        </Col>
        <Row style={{zIndex:0,marginLeft:10,}} >
          <Col xs={16} sm={20} >
            <Radio.Group onChange={(e) => { this.setState({ sex: +e.target.value }) }} defaultValue={-1}>
              <Radio.Button value={-1}>全选</Radio.Button>
              <Radio.Button value={0}>男</Radio.Button>
              <Radio.Button value={1}>女</Radio.Button>
            </Radio.Group>
          </Col>
          <Col xs={8} sm={4}>
            <Button type="primary" icon={<SearchOutlined />} onClick={this.searchSubmit}>查询</Button>
          </Col>
        </Row>

      </Row>
    )
  }
}
