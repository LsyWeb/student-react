import { connect ,history } from 'umi'
import {message} from 'antd'
import Login from '../Login'

const mapDispatchToProps = dispatch => ({
  async onLogin(account, password) {
    const isLoginInfo = await dispatch({ type: 'login/login', payload: { account, password } });
    if (isLoginInfo.status === 'success') {
      history.push('/')
      message.success('登录成功')
    } else {
      message.error(isLoginInfo.msg);
    }
  }
})

export default connect(null, mapDispatchToProps)(Login)
