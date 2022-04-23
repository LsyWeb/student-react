import { connect } from "umi";
import { Pagination } from 'antd'


const mapStateToProps = state =>({
  current:state.student.condition.page,
  pageSize:state.student.condition.limit,
  total:state.student.result.total,
  showTotal:(total,range) => `共有 ${total} 条`
})

const mapDispatchToProps = dispatch => ({
  onChange(newPage){
    // 条件变化
    dispatch({
      type:'student/setCondition',
      payload:{
        page:newPage
      }
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Pagination)