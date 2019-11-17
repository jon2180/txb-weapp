//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // wx.request({
    //   url: 'http://47.106.178.125/wx/login/wx_auth',
    //   success: console.log,
    //   fail: console.error
    // })

   
  },
  globalData: {
    userInfo: null
  }
})