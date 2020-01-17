import request from '../../config/axios';
var ENV =process.env.NODE_ENV
var Tenv;
Tenv = 'http://219.143.144.250:8081'
// ENV=='development'?Tenv='/api':Tenv=''
// 接口封装请求示例
export const getArticlePage = (pageId,pageIndex,pageSize) => {
  return request({
    url: Tenv+'/shfp/revision/zspt/columnget/getArticlePage',
    method: 'get',
    params: {
    	pageId:pageId,
    	pageIndex:pageIndex,
    	pageSize:pageSize
    }
  })
}
export const getConfig = (data) => {
  return request({
    url: Tenv+'/user/wxpay/pay/',
    method: 'get',
    params:data
  })
}
export const notify = (data) => {
  return request({
    url: Tenv+'/user/wxpay/notify',
    method: 'get',
    params:data
  })
}
export default{
  getArticlePage,  //输出定义的接口模块
  getConfig,
  notify
}
