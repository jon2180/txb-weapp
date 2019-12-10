// pages/details/commodity/commodity.js
Page({

  /**
   * Page initial data
   */
  data: {
    /**
     * 页面的初始数据
     */
    cInfo: {
      price: 189,
      title: 'LAMBO V12 VISION GRAN TURISMO',
      desc: 'LAMBO V12 VISION GRAN TURISMO LAMBO V12 VISION GRAN TURISMO LAMBO V12 VISION GRAN TURISMO LAMBO V12 VISION GRAN TURISMO LAMBO V12 VISION GRAN TURISMO LAMBO V12 VISION GRAN TURISMO',
      tags: ['包邮', '汽车', '7.5折'],
      time: '123456',
      images: ['https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/11_24_Lambo_V12/LamboV12_VisionGT_exterior-%282%29.jpg',
        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/11_24_Lambo_V12/LamboV12_VisionGT_exterior-%283%29.jpg',
        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/11_24_Lambo_V12/LamboV12_VisionGT_exterior-%284%29.jpg'
      ],
      origin: {
        openid: '',
        avatarUrl: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/11_24_Lambo_V12/LamboV12_VisionGT_exterior-%284%29.jpg',
        nickName: 'maoxian',
      }
    },

    userInfo: {
      avatarUrl: '',
      nickName: '',
      age: 18,
      gengder: 0,
    },

    openid: '',

    cmts: [{
      /** 用户openid */
      _openid: '',

      /** 发布者的头像 */
      avatarUrl: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/11_24_Lambo_V12/LamboV12_VisionGT_exterior-%284%29.jpg',

      /** 发布者的昵称 */
      nickName: 'mao',

      /** 评论的内容 */
      content: 'jkfjkffjfkkldsajflalsdkjfklsdjkflasjjkfjkffjfkkldsajflalsdkjfklsdjkflasjjkfjkffjfkkldsajflalsdkjfklsdjkflasjjkfjkffjfkkldsajflalsdkjfklsdjkflasjjkfjkffjfkkldsajflalsdkjfklsdjkflasj',

      /** {Number} 楼层 */
      floor: 1,

      /** 时间戳 */
      time: '123456',
    }, {
      /** 用户openid */
      _openid: '',

      /** 发布者的头像 */
      avatarUrl: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/11_24_Lambo_V12/LamboV12_VisionGT_exterior-%284%29.jpg',

      /** 发布者的昵称 */
      nickName: 'mao',

      /** 评论的内容 */
      content: 'jkfjkffjfkkldsa',

      /** {Number} 楼层 */
      floor: 1,

      /** 时间戳 */
      time: '123456',
    }, {
      /** 用户openid */
      _openid: '',

      /** 发布者的头像 */
      avatarUrl: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/11_24_Lambo_V12/LamboV12_VisionGT_exterior-%284%29.jpg',

      /** 发布者的昵称 */
      nickName: 'mao',

      /** 评论的内容 */
      content: 'jkfjkffjfkkldsa',

      /** {Number} 楼层 */
      floor: 1,

      /** 时间戳 */
      time: '123456',
    }],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

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

  }
})