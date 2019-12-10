// pages/auth/login/login.js

const {
  getSettingSync
} = require('../../../utils/wx.js')

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
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
  },

  bindGetUserInfo(e) {
    console.log(e)
    // bindGetUserInfoDeprecated(e.detail)
  }
})