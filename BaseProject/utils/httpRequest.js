/**
 * GET请求
 */
function get(url,data={}){
  return request(url,data,'GET');
}
/**
 * POST请求
 */
function post(url,data={}){
  return request(url,data,'POST');
}

/**
 * 微信的Request网络请求
 */
function request(url,data = {},method = "GET"){
  var contentType = 'application/json'
  return new Promise(function(resolve,reject){
    wx.request({
      url: url,
      data:data,
      method:method,
      header:{
        'Content-Type':contentType
      },
      success:(res)=>{
        // if (res.statusCode == 200) {
        //   if(res.data.response == 0){
        //     resolve(res.data);
        //   }
        //   else{
        //     reject(res.data.desc);
        //   }
        // }
        // else{
        //   reject("请求失败：" + res.statusCode);
        // }
        resolve(res.data);
      },fail:(error)=>{
        reject("服务器连接异常，请检查网络再试");
      }
    })
  });

}
module.exports = {
  request,
  get,
  post
}
