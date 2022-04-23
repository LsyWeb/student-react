import { searchStudent, deleteBysNo } from '../services/student'
import { history } from 'umi'

export default {
  state: {
    condition: {
      page: 1,
      limit: 10,
      search: '',
      sex: -1
    },
    result: {
      total: 0,
      data: []
    }
  },
  subscriptions: {
    changHistory({ history, dispatch }) {
      history.listen((newLoaction) => {
        if (newLoaction.pathname !== '/student') return;
        let query = newLoaction.query;
        query.page && (query.page = +query.page)
        query.limit && (query.limit = +query.limit)
        query.sex && (query.sex = +query.sex)

        dispatch({ type: 'changeCondition', payload: query })

        dispatch({ type: 'fetchStudent' })
      })

    }
  },
  reducers: {
    changeCondition(state, { payload }) {
      return {
        ...state,
        condition: {
          ...state.condition,
          ...payload
        }
      }
    },
    setResult(state, { payload }) {
      return {
        ...state,
        result: payload
      }
    }
  },
  effects: {
    /**
     * 根据学号删除学生
     */
    *deleteStuBysNo({ payload }, { put, call }) {
      const res = yield call(deleteBysNo, payload);
      if (res.status === 'success') {
        yield put({ type: 'fetchStudent' })
        return res;
      } else {
        return res;
      }
    },
    /**
     * 改变搜索条件
     */
    *setCondition({ payload }, { put, select }) {
      // 改变地址
      const condition = yield select(state => state.student.condition);
      const newCondition = { ...condition, ...payload }

      history.push(`?page=${newCondition.page}&limit=${newCondition.limit}&search=${newCondition.search}&sex=${newCondition.sex}`)
    },
    /**
     * 获取学生列表数据
     * @param {*} action 
     * @param {*} dva 
     */
    *fetchStudent({ dispatch }, { put, call, select }) {
      const condition = yield select(state => state.student.condition);//获取仓库中的查询条件
      const result = yield call(searchStudent, condition)
      console.log(result)
      console.log('删除了')
      yield put({ type: 'setResult', payload: { total: result.cont, data: result.data } });
    }
  }
}