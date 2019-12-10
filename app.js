//app.js

import {
  txbRequest
} from './utils/request.js'

App({
  globalData: {
    /** 用户信息 */
    userInfo: {

    },

    /** 是否获取用户信息成功 */
    hasUserInfo: false,
  },
  onLaunch() {
    const self = this
    // 检验用户是否授权获取用户信息
    wx.getSetting({
      success(res) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(res) {
              /** TODO: 自动登录，从服务器获取用户信息 */              
              if (self.userInfoReadyCallback) {
                self.userInfoReadyCallback(res)
              }

              const {
                /** 包括敏感数据在内的完整用户信息的加密数据 */
                encryptedData,
                /** 加密算法的初始向量 */
                iv
              } = res
              // 登录
              wx.checkSession({
                /** 如果当前的session_key有效 */
                success(res) {
                  console.log(res)

                  try {
                    console.log(wx.getStorageSync('session_key'))
                  } catch (err) {
                    console.error(err)
                  }

                },
                /** 如果当前的session_key无效 */
                fail(err) {
                  console.error(err)
                  wx.login({
                    success: res => {
                      if (res.code) {
                        // 发送 res.code 到后台换取 openId, sessionKey, unionId

                        txbRequest({
                          data: {
                            code: res.code,
                            encrypteData: encryptedData,
                            iv: iv
                          },
                          url: '/wx/login/getSession',
                        }).then(_ => {
                          const session_key = _.data

                          if (_.code === 10000)
                            wx.setStorageSync('session_key', session_key)
                          else
                            console.log("login failed")

                        }).catch(err => {
                          console.log(err)
                        })

                      } // if -> res.code
                    }
                  })
                }
              })
            }
          })
        }
        // 未授权，跳转至登录界面
        else {
          wx.reLaunch({
            url: '/pages/auth/login',
            fail(res) {
              console.log(res)
            }
          })
        }
      }, // getSetting -> success
      fail(err) {
        console.error(err)
        wx.reLaunch({
          url: '/pages/auth/login',
          fail(res) {
            console.log(res)
          }
        })
      } // getSetting -> fail
    })
  },
})