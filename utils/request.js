const baseUrl = 'https://www.5-223.tech'

/**
 * 请求服务
 */
export const request = ({
  data,
  method = 'post',
  url,
  cbComplete
}) => new Promise((resolve, reject) => {
  wx.request({
    url: baseUrl + url,
    method,
    data,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: res => resolve(res),
    fail: err => reject(err),
    complete: (res) => {
      if (cbComplete && typeof cbComplete === 'function')
        return cbComplete(res)
    }
  })
})