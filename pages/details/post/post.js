// miniprogram/pages/ConfessionDetail/ConfessionDetail.js

import {
  formatTime
} from '../../../utils/index.js'

// import {
//   getConfession as apiGetConfession,
//   likeConfession as apiLikeConfession,
// } from '../../../api/confessions.js'

// import {
//   getUserInfoFromDb as apiGetUserInfoFromDb
// } from '../../../utils/api.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    confession: {
      _id: '',
      content: '',
      images: [],
      tags: [],
      comments: [],
      likes: 10,
      time: 0
    },
    // confession: {
    //   _id: '586490d25db6b993018ce3723f98c214',
    //   content: '测试图片上传至upload',
    //   images: ['cloud://nju.6e6a-nju-1300183665/upload/1572256146.7866.jpg', 'cloud://nju.6e6a-nju-1300183665/upload/1572256146.7866.jpg', 'cloud://nju.6e6a-nju-1300183665/upload/1572256146.7866.jpg', 'cloud://nju.6e6a-nju-1300183665/upload/1572256146.7866.jpg', 'cloud://nju.6e6a-nju-1300183665/upload/1572256146.7866.jpg', 'cloud://nju.6e6a-nju-1300183665/upload/1572256146.7866.jpg'],
    //   tags: ['表白', '表白'],
    //   comments: [],
    //   likes: 10,
    //   time: formatTime(1572256147 * 1000)
    // },

    userInfo: {
      avatarUrl: '',
      nickname: '',
      age: 18,
      gengder: 0,
    },

    hasLike: false, // 是否已经对该表白帖点赞
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    // this.setData({
    //   'confession._id': options._id // id的命名需要和表白墙中跳转链接中设置的参数一致
    // })
    // this.getConfessionData()

    // this.getUserInfo(this.data.userInfo._openid)
  },

  /**
   * 点击图片的图片预览功能
   */
  bindPreviewImage(event) {
    const index = event.target.dataset.index ? event.target.dataset.index : 0
    wx.previewImage({
      urls: this.data.confession.images,
      current: this.data.confession.images[index]
    })
  },

  bindLikeConfession() {
    const hasLike = this.data.hasLike

    // TODO: 当前点赞数需要向服务器请求
    const likes = (+this.data.confession.likes) + (hasLike ? -1 : 1)
    // apiLikeConfession({
    //   _id: this.data.confession._id,
    //   likes,
    // }).then(res => {
    //   wx.showToast({
    //     title: '点赞成功',
    //   })
    //   this.setData({
    //     'confession.likes': likes,
    //     hasLike: !hasLike
    //   })
    // }).catch(err => {
    //   console.error(err)
    // })
  },

  getConfessionData() {
    if (!this.data.confession._id) return;
    apiGetConfession({
      _id: this.data.confession._id
    }).then(res => {
      this.setData({
        confession: {
          _id: res.data._id,
          content: res.data.content,
          comments: res.data.comments,
          images: res.data.images,
          likes: res.data.likes,
          tags: res.data.tags,
          time: formatTime(res.data.time * 1000)
        },
        userInfo: {
          _openid: res.data._openid
        }
      })
    }).catch(err => console.error(err))
  },

  getUserInfo() {
    if (this.data.userInfo._openid) {
      apiGetUserInfoFromDb(this.data.userInfo._openid).then(response => {
        const info = response.data[0]
        console.log('fetch user information successfully, info: ', info)
        this.setData({
          userInfo: {
            _openid: info._openid,
            nickname: info.nickname,
            avatarUrl: info.avatarUrl,
            age: info.age,
            gender: info.gender
          }
        })
      }).catch(err => {
        console.error({
          errMsg: 'fetchUserInfo:fail'
        })
      })
    }
  }
})