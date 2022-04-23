import React from 'react'
import { NavLink,withRouter } from 'umi'
import { Menu } from 'antd'
const { SubMenu } = Menu;
export default withRouter((props) => {

  const menusConfig = [
    {
      key:'/',
      title:'首页',
    },
    {
      key:'/studentWrapper',
      title:'学生管理',
      children:[
        {
          key:'/student',
          title:'学生列表',
        },
        {
          key:'/student/add',
          title:'新增学生'
        }
      ]
    }
  ]
  const menus = menusConfig.map(item=>{
    if(item.children){
      const subMenus = item.children.map(it=>{
        return <Menu.Item key={it.key}><NavLink to={it.key} exact>{it.title}</NavLink></Menu.Item>
      })
      return <SubMenu title={item.title} key={item.key}>{subMenus}</SubMenu>
    }else{
      return <Menu.Item key={item.key}><NavLink to={item.key} exact>{item.title}</NavLink></Menu.Item>
    }
  })
  let defaultKey = [];
  for (const prop of menusConfig) {
    if(prop.children){
      for (const child of prop.children) {
        if(child.key === props.location.pathname){
          defaultKey.push(prop.key);
        }
      }
    }
  }

  return (

    <Menu theme="dark" mode="inline" defaultOpenKeys={defaultKey} selectedKeys={props.location.pathname} style={{ height: '100%' }}>
      {menus}
    </Menu>
  )
})
