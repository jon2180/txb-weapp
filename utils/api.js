import {
  txbRequest
} from './request.js'


export const login = (encryptedData, iv) => {
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
          const data = _.data
          if (data.code === 10000)
            wx.setStorageSync('token', data.data)
          else
            console.log("login failed")
        }).catch(err => {
          console.log(err)
        })
      } // if -> res.code
    }
  })
}

export const log = () => {
  // 查看是否授权
  wx.getSetting({
    success(res) {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        wx.getUserInfo({
          success(res) {
            // console.log(res)

            const {
              encryptedData,
              iv
            } = res
            // 登录
            wx.checkSession({
              success(res) {
                console.log(res)
                login(encryptedData, iv)
              },
              fail(err) {
                console.error(err)
                login(encryptedData, iv)
              }
            })
          }
        })
      } else {
        wx.reLaunch({
          url: '/pages/auth/login',
          fail(res) {
            console.log(res)
          }
        })
      }
    },
    fail(err) {
      console.error(err)
      wx.reLaunch({
        url: '/pages/auth/login',
        fail(res) {
          console.log(res)
        }
      })
    }
  })
}

export default {
  login,
  log
}