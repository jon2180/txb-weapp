
export const getUserInfoSync = () => {
  return new Promise((resolve, reject)=> {
    wx.getUserInfo({
      withCredentials: true,
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
}
