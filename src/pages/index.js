import React from 'react'
import Header from '../component/Home/Header'
import './index.css'
function home() {

  return (
    <div className="home-container">
      <Header></Header>
    </div>
  )
}
home.title = '首页';
home.wrappers = ['@/route/PrivateRoute'];

export default home;
