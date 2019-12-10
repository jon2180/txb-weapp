const baseUrl = 'https://www.5-223.tech'

//添加事件结束
Promise.prototype.finally = function(callback) {
  const Promise = this.constructor;
  return this.then(
    function(value) {
      Promise.resolve(callback()).then(
        function() {
          return value;
        }
      );
    },
    function(reason) {
      Promise.resolve(callback()).then(
        function() {
          throw reason;
        }
      );
    }
  );
}

/**
 * 请求服务
 */
/**
 * @param config 配置
 */
export const requestApi = (config) => new Promise((resolve, reject) => wx.request({
  ...config,
  success: res => resolve(res),
  fail: err => reject(err),
  complete: (res) => {
    if (config.complete && typeof cbComplete === 'function')
      return cbComplete(res)
  }
}))

export const txbRequest = ({
  data,
  url,
  method = 'post'
}) => requestApi({
  data,
  url: baseUrl + url,
  method,
  header: {
    'Content-Type': 'application/json',
    'Session-Key': wx.getStorageSync('session_key') || ''
  },
}).then(res => {
  // 验证登录并保存 token
  if (res.statusCode > 400) {
    return Promise.reject(new Error('请求出错'))
  }
  console.log(res)
  // 
  return res.data
})