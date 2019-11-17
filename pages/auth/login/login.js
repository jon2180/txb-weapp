// pages/auth/login/login.js

const {
  getSettingSync
} = require('../../../utils/wx.js')

Page({

  /**
   * Page initial data
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res)

              const {
                encryptedData,
                iv
              } = res;
              // 登录
              wx.checkSession({
                success(res) {
                  console.log(res)
                  wx.login({
                    success: res => {
                      if (res.code)
                        wx.request({
                          url: 'https://www.5-223.tech/wx/login/getSession',
                          method: 'post',
                          data: {
                            code: res.code,
                            encrypteData: encryptedData,
                            iv: iv
                          },
                          success(res) {
                            console.log(res)
                          },
                          fail(err) {
                            console.error(err)
                          }
                        })
                      // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    }
                  })
                },
                fail(err) {
                  console.error(err)
                  wx.login({
                    success: res => {
                      if (res.code)
                        wx.request({
                          url: 'https://www.5-223.tech/wx/login/getSession',
                          method: 'post',
                          data: {
                            code: res.code,
                            encrypteData: detail.encrypteData,
                            iv: detail.iv
                          },
                          success(res) {
                            console.log(res)
                          },
                          fail(err) {
                            console.error(err)
                          }
                        })
                      // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    }
                  })
                }
              })
            }
          })
        } else {

        }
      }
    })
    // bindGetUserInfoDeprecated();
    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success(res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //     } else {
    //       console.log("用户尚未授权")
    //     }
    //   }
    // })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  },

  bindGetUserInfoDeprecated(detail) {





    // 先查看用户是否已经给了授权 给了就直接获取信息，直接登录，没有就打开授权功能





  },

  bindGetUserInfo(e) {
    console.log(e)
    // bindGetUserInfoDeprecated(e.detail)
  }
})