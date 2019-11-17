// import {
//   signUp
// } from '../../utils/api.js'

const app = getApp()

Page({
  data: {
    isLoading: false,
    homePath: '../index/index/index'
  },

  onLoad() {

  },

  bindGetUserInfo(res) {
    console.log(res)
    const self = this
    this.setData({
      isLoading: true
    })
    if (res.detail.errMsg === 'getUserInfo:ok') {
      const {
        openid
      } = app.globalData
      // signUp(openid, res.detail.userInfo).then(res => {
      //   console.log(res)
      //   wx.showToast({
      //     title: '注册成功'
      //   })

      //   this.setData({
      //     isLoading: false
      //   })
        
      //   wx.reLaunch({
      //     url: self.data.homePath,
      //     fail(err) {
      //       console.log(err)
      //     }
      //   })
      
      // }).catch(err => {
      //   console.log(err)
      //   this.setData({
      //     isLoading: false
      //   })
      //   wx.showToast({
      //     title: '注册失败，请检查网络问题'
      //   })
      // })
    } else {
      this.setData({
        isLoading: false
      })
      wx.showToast({
        title: '授权失败'
      })
    }
  },
})