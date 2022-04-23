import React from 'react'
import { withRouter, Link } from 'umi'
import { Breadcrumb } from 'antd'

export default withRouter(function (props) {

  console.log(props.history);
  const routes = [
    {
      path: '/',
      breadcrumbName: '首页',
    },
    {
      path: '/student',
      breadcrumbName: '学生列表'
    },
    {
      path: '/student/add',
      breadcrumbName: '新增学生'
    }
  ]
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    // console.log(last)
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
  }
  return (<Breadcrumb itemRender={itemRender} routes={routes}> </Breadcrumb>)
})