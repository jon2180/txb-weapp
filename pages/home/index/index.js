//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: false,
    indicator: true,
    placeholderForSearch: 'Rooms',

    banners: [{
      imageUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
      redirectTo: 'https://www.baidu.com',
    }, {
      imageUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
      redirectTo: 'https://www.baidu.com',
    }, {
      imageUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
      redirectTo: 'https://www.baidu.com',
    }, ],

    placeholderForSearch: 'Rooms',

    categories: ["美妆", "美妆", "美妆", "美妆", "美妆", "美妆", "美妆", "美妆"],
    commodities: [{
        imageUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
        desc: '超级棒超级棒超级棒超级棒超级棒超级棒超级棒超级棒超级棒超级棒超级棒',
        price: '112.12',
        tags: ['no bargain'],
        clickNum: 34,
        time: '5分钟前',
        origin: {
          avatarUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
          nickname: 'flyfly',
          tags: ['No.5', 'verified'],
        },
      },
      {
        imageUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
        desc: '超级棒',
        price: '112.12',
        tags: ['no bargain'],
        time: '5分钟前',
        clickNum: 34,
        origin: {
          avatarUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
          nickname: 'flyfly',
          tags: ['No.5', 'verified'],
        },
      },
    ],

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})