// 面积图表配置
export const areaConfig = {
  height:60,
  autoFit: true,
  line:{
    color:'#d3adf7',
  },
  areaStyle: { fill: '#f9f0ff' },
};
// 出生日期图表配置
export const birthConfig = {
  data: birthData,
  xField: 'type',
  yField: 'sales',
  label: {
    position: 'middle',
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    type: { alias: '出生年份' },
    sales: { alias: '人数' },
  },
};
//饼图 
export const pieConfig = {
  autoFit:true,
  angleField: 'value',
  colorField: 'type',
  radius: 0.8,
};

// 访问量数据
export const visitsData = [
  264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
  243, 226, 192,
];
// 学生总数数据
export const stuTotalData = [10,39,32,52,42,32,43,10,30,14];
// 学生修改信息数据
export const stuUpdataData = [10,29,12,42,22,32,43,40,30,14];
// 学生删除信息数据
export const stuDeleteData = [3,2,3,6,7,8,21,5,2,2];
// 学生性别分布图
export const stuSexData = [
  {
    type:'男',
    value:20
  },
  {
    type:'女',
    value:16
  }
];
// 学生出生年分布图
export const birthData = [
  {
    type: '1995',
    sales: 38,
  },
  {
    type: '1996',
    sales: 52,
  },
  {
    type: '1997',
    sales: 61,
  },
  {
    type: '1998',
    sales: 85,
  },
  {
    type: '1999',
    sales: 78,
  },
  {
    type: '2000',
    sales: 85,
  },
  {
    type: '2001',
    sales: 88,
  },
  {
    type: '2002',
    sales: 45,
  },
  {
    type: '2003',
    sales: 28,
  },
  {
    type: '2004',
    sales: 8,
  },
];

