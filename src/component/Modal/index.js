import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  
  render() {
    const defaultProp = {
      bg:'rgba(0,0,0,.5)'
    }
    const datas = {...defaultProp,...this.props}
    return (
      <div className="modal" style={{background:datas.bg}} onClick={(e)=>{
        if(e.target.className === 'modal'){
          this.props.onClose()
        }
      }} >
        <div className="modal-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
