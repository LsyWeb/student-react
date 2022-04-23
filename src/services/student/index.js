import qs from 'query-string'
const appkey = 'liushuaiyang_1611977044718';
// 登录
export async function studentlogin(loginInfo) {
  const query = qs.stringify(loginInfo);
  return await fetch(`/api/student/stuLogin?appkey=${appkey}&${query}`,{method:"POST"}).then(res => res.json())
}
// 注册
export async function studentRegister(regInfo) {
  const query = qs.stringify(regInfo);
  return await fetch(`/api/student/stuRegister?appkey=${appkey}&${query}`,{method:"POST"}).then(res => res.json())
}
// studentRegister({
//   account:'liushuaiyang',
//   username:'liushuaiyang',
//   password:'lsy090017',
//   rePassword:'lsy090017'
// }).then(res => console.log(res))



// 获取学生信息


// 分页查询
export async function getStudent(page = 1, limit = 10) {
  return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`).then(resp => resp.json()).then(resp => resp.data)
}
// 查询全部学生
export async function getAllStudent() {
  return await fetch(`/api/student/findAll?appkey=${appkey}`).then(res => res.json()).then(resp => resp.data)
}

// 搜索学生
// search是根据学号，邮箱，地址来进行查询
export async function searchStudent({ page = 1, limit = 10, search = "", sex = -1 } = { page: 1, limit: 10 }) {

  if (search) {
    console.log('search')
    const resp = await fetch(`api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${search}&sex=${sex}`)
      .then(resp => resp.json()).then(resp => resp.data);
    console.log(resp)
    resp.data = resp.searchList;
    delete resp.searchList;
    return resp;
  } else {
    const resp = await getStudent(page, limit);
    console.log(resp)
    resp.data = resp.findByPage;
    delete resp.findByPage;
    return resp;
  }
}
// {sNo,name,sex,birth,phone,adreess,email}
// 添加学生
export async function addStudent(stuObj) {
  console.log(stuObj)
  const queryStr = qs.stringify(stuObj);
  console.log(queryStr)
  return await fetch(`/api/student/addStudent?appkey=${appkey}&${queryStr}`).then(res => res.json())
}

// 修改学生信息
export async function updateStudent(stuObj) {
  const queryStr = qs.stringify(stuObj);
  console.log(queryStr)
  return await fetch(`/api/student/updateStudent?appkey=${appkey}&${queryStr}`).then(res => res.json())
}

// 根据sNo查询单个学生信息
export async function getStudentBysNo(sNo) {
  const allStu = await getAllStudent();
  const result = allStu.find(it => it.sNo === sNo);
  return result;
}

// 删除某个学生
export async function deleteBysNo(sNo) {
  return await fetch(`/api/student/delBySno?appkey=${appkey}&sNo=${sNo}`).then(res => res.json())
}