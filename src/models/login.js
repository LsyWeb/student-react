import {studentlogin} from  '../services/student'
export default {
  state: {
    loginUser: null
  },
  subscriptions:{
    syncLoaclStorage({dispatch}){//同步本地存储
      const loginId = localStorage.getItem('loginUser');
      if(loginId){
        dispatch({type:'setLoginUser',payload:loginId})
      }
    }
  },
  reducers: {
    setLoginUser(state, { payload }) {
      return {
        loginUser: payload
      }
    }
  },
  effects: {
    *login({ payload }, { put ,call}) {
      const {account,password} = payload;
      const res = yield call(studentlogin,payload);
      console.log(res)
      if (res.status === 'success') {
        localStorage.setItem('loginUser', account)
        yield put({ type: 'setLoginUser', payload: account })
      }
      return res;
    },
    *loginOut(action, { put }) {
      localStorage.removeItem('loginUser');
      yield put({ type: 'setLoginUser', payload: null });
    }
  }
}