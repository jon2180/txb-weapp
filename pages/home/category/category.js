// pages/home/category/category.js

import Toast from '../../../lib/vant/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (!options.name) {
      Toast.fail('没有传递分类id')
      wx.navigateBack({
        delta: 1,
      })
      return
    }
    
    // 设置title
    wx.setNavigationBarTitle({
      title: options.name
    })

    // 请求数据
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  getCommodities() {
    
  }
})