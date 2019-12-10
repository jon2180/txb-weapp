// pages/post/post.js

const {
  formatTime
} = require('../../../utils/index.js')

// import {
//   getConfessions as apiGetConfessions
// } from '../../../api/confessions.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

    placeholderForSearch: '搜索二手商品',

    /** 轮播图部分 */
    autoplay: false,
    indicator: true,
    banners: [{
      imageUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
      navTo: '../../details/post/post?id=123',
    }, {
      imageUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
      navTo: '../../details/post/post?id=123',

    }, {
      imageUrl: 'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg',
      navTo: '../../details/post/post?id=123',
    }],

    active: 0,
    gossip: [{
      origin: {
        avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
        nickName: '123456',
      },
      time: '15:30',
      content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
      tags: ['表白', '歌曲'],
      like: 110,
      comments: 6,
    }, {
      origin: {
        avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
        nickName: '123456',
      },
      time: '15:30',
      content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
      tags: ['表白', '歌曲'],
      like: 110,
      comments: 6,
    }],

    consultation: [{
      origin: {
        avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
        nickName: '123456',
      },
      time: '15:30',
      content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
      tags: ['表白', '歌曲'],
      like: 110,
      comments: 6,
    }, {
      origin: {
        avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
        nickName: '123456',
      },
      time: '15:30',
      content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
      tags: ['表白', '歌曲'],
      like: 110,
      comments: 6,
    }],

    helps: [{
      origin: {
        avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
        nickName: '123456',
      },
      time: '15:30',
      content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
      tags: ['表白', '歌曲'],
      like: 110,
      comments: 6,
    }, {
      origin: {
        avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
        nickName: '123456',
      },
      time: '15:30',
      content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
      tags: ['表白', '歌曲'],
      like: 110,
      comments: 6,
    }], 

    list: [{
      title: '闲聊',
      data: [{
        origin: {
          avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
          nickName: '123456',
        },
        time: '15:30',
        content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
        tags: ['表白', '歌曲'],
        like: 110,
        comments: 6,
      }, {
        origin: {
          avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
          nickName: '123456',
        },
        time: '15:30',
        content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
        tags: ['表白', '歌曲'],
        like: 110,
        comments: 6,
      }]
    }, {
      title: '哈哈哈',
      data: [{
        origin: {
          avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
          nickName: '123456',
        },
        time: '15:30',
        content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
        tags: ['表白', '歌曲'],
        like: 110,
        comments: 6,
      }, {
        origin: {
          avatarUrl: 'https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/e7d2-fzyqqiq8227715.jpg',
          nickName: '123456',
        },
        time: '15:30',
        content: '表白今晚迎新晚会上唱《我在那一角落患过伤风》的女孩子。',
        tags: ['表白', '歌曲'],
        like: 110,
        comments: 6,
      }]
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getConfessions(0, true)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    // wx.startPullDownRefresh()
    this.getConfessions(0, true)
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getConfessions(this.data.list[this.data.active].data.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  bindClickLike(e) {

  },

  /**
   * 点击图片的图片预览功能
   */
  bindPreviewImage(event) {
    const index = event.target.dataset.index ? event.target.dataset.index : 0
    const imgIndex = event.target.dataset.imgIndex ? event.target.dataset.imgIndex : 0
    wx.previewImage({
      urls: this.data.confessions[index].images,
      current: this.data.confessions[index].images[imgIndex]
    })
    return false
  },

  getConfessions(offset, isReloading = false) {
    const limit = 10
    if (offset % limit !== 0 && !isReloading) {
      wx.showToast({
        title: '没有更多了,刷新试试呢',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: '加载表白中',
    })

    /**
     * TODO: 加载博客内容
     */

    // apiGetConfessions({
    //   limit: limit,
    //   skip: offset
    // }).then(res => {
    //   console.log(res)
    //   wx.hideLoading();
    //   const data = res.list.map((val, ind) => {
    //     return {
    //       ...val,
    //       time: formatTime(val.time * 1000)
    //     }
    //   })
    //   this.setData({
    //     confessions: isReloading ? data : [...this.data.confessions, ...data]
    //   })
    //   wx.hideLoading();
    // }).catch(err => {
    //   console.error(err)
    //   wx.hideLoading();
    //   wx.showToast({
    //     title: '加载失败',
    //     icon: 'none'
    //   })
    // })
    wx.hideLoading()

    // setTimeout(() => {
    //   wx.hideLoading()
    // }, 1000)

  },

  bindTagClick(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/confessions/tag/tag?tag=${e.detail.name}`,
    })
  },

  bindClickPost(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/details/post/post?_id=${e.detail._id}`,
    })
  },

  bindClickLikePost(e) {
    console.log('点赞', e.detail)
  }

})