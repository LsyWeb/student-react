import { connect } from 'umi';
import StudentSearch from '../Student/StudentSearch'

const mapStateToProps = state => ({
  ...state.student.condition,
})

const mapDipatchToProps = dispatch =>({
  searchSubmit(condition){
    // 修改查询条件
    dispatch({
      type:'student/setCondition',
      payload:condition
    })
  }
})

export default connect(mapStateToProps,mapDipatchToProps)(StudentSearch)
