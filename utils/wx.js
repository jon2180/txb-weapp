export const getUserInfoSync = () => {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      withCredentials: true,
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
}


export const getUserInfo = () => new Promise(function(resolve, reject) {
  wx.getUserInfo({
    withCredentials: true,
    success(res) {
      if (res.detail.errMsg === 'getUserInfo:ok') {
        resolve(res);
      } else {
        reject(res)
      }
    },
    fail(err) {
      reject(err);
    }
  })
});

/**
 * 调用微信登录
 */
export const login = () => new Promise(function(resolve, reject) {
  wx.login({
    success: function(res) {
      if (res.code) {
        resolve(res.code);
      } else {
        reject(res);
      }
    },
    fail: function(err) {
      reject(err);
    }
  });
});

/**
 * 重定向
 */
export const redirect = (url = '/pages/auth/login/login') => {
  //判断页面是否需要登录
  wx.redirectTo({
    url: url
  })
}