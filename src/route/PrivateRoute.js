import React from 'react'
import {history,connect} from 'umi'

function PrivateRoute(props) {
  if(props.isLogin){
    return props.children;
  }
  else{
    history.push('/login')
  }
  return (
    <div>
      {props.children}
    </div>
  )
}

const mapStateToProps = state =>({
  isLogin:state.login.loginUser
})

export default connect(mapStateToProps,)(PrivateRoute)