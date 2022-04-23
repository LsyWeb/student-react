import React from 'react'
import Layout from '../component/layout'
import Header from '../component/container/HeaderContainer'
import Menu from '../component/Menu'


export default function index(props) {
  console.log(props)
  if (props.location.pathname === '/login' || props.location.pathname === '/logon') {
    return props.children;
  } else {
    return (
      <Layout
        header={<Header />}
        menu={<Menu />}
        content={
          <>
            {props.children}
          </>
        }
      />
    )
  }

}
