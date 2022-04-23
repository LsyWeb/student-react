import { connect,history } from 'umi'
import StudentTable from '../Student/StudentTable'

const mapStateToProps = state => ({
  stuList: state.student.result.data,
  isLoading: state.loading.effects["student/fetchStudent"]
})

const mapDispatchToProps = dispatch => ({
  onDetail(sNo){
    history.push(`/student/:${sNo}`)
  },
  async onDelete(sNo){
    return await dispatch({type:'student/deleteStuBysNo',payload:sNo});
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(StudentTable)