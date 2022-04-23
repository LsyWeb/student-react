export default {
  proxy:{
    '/api/upload':{
      target:'http://101.132.72.36:5100'
    },
    '/api':{
      target:'https://open.duyiedu.com',
      changeOrigin:true
    },
  },
  dva:{
  },
}