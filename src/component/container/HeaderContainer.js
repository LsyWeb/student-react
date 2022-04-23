import { connect ,history } from 'umi'
import Header from '../Header'

const mapStateToPorps = state => ({
  username:state.login.loginUser
})

const mapDispatchToProps = dispatch => ({
  onLoginOut() {
    dispatch({type:'login/loginOut'})
    history.push('/login')
  }
})

export default connect(mapStateToPorps, mapDispatchToProps)(Header)
