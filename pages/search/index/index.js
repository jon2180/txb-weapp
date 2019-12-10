// pages/search/search/search.js
// miniprogram/pages/search/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    history: ['ipad'],
    recommendation: ['唇膏'],
    active: 0,

    userInfo: {},
    hasUserInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  bindInput(event) {
    console.log(event)
    return event
  },

  bindSearch(e) {
    console.log(e)
    console.log(this.data)
    // wx.navigateTo({
    //   url: '../result/result?keyword=' + this.data.keyword,
    //   fail(e) {
    //     console.error(e)
    //   }
    // })
  },

  bindCancel() {
    wx.navigateBack()
  },

  bindClearHistory() {
    this.setData({
      history: []
    })
    // wx.setStorageSync(keyword, )
  },

  bindClickKeyword(e) {
    wx.navigateTo({
      url: '../result/result?keyword=' + e.currentTarget.dataset.keyword,
    })
  }
})