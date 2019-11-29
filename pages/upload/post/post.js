// miniprogram/pages/upload/post/post.js

// import {
//   throttle,
//   getFileCloudPath
// } from '../../../utils/index.js'

// import {
//   uploadFileSync
// } from '../../../utils/wx-api.js'

// import { uploadConfession as apiUploadConfession } from '../../../utils/api.js'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    tags: [],
    images: [],

    placeholder: '有什么事情和大家分享下吧！',
    show: false,

    tagChooseController: {
      placeholder: '搜索标签',
      keyword: '',
      relatedTags: ['hello', 'mini', 'program', '表白', 'fff']
    }
  },

  onLoad() {
  },

  /**
   * 绑定主输入框的输入事件，使输入框立即更新
   */
  bindChangeContent(data) {
    this.setData({
      content: data.detail.value
    });
  },

  /**
   * 移除标签
   */
  bindRemoveTag(event) {
    const {
      tagname
    } = event.target.dataset
    const tmpTags = this.data.tags
    const index = tmpTags.indexOf(tagname)
    if (index === -1) return;
    tmpTags.splice(index, 1)
    this.setData({
      tags: tmpTags
    })
  },

  /**
   * 绑定“添加标签”按钮
   */
  bindOpenActionSheet() {
    this.setData({
      show: true
    })
  },

  /**
   * 绑定用于选择标签的 action sheet 的关闭事件
   */
  bindCloseActionSheet() {
    this.setData({
      show: false
    })
  },

  /**
   * 绑定 关键词输入框的输入事件
   */
  bindInputKeyword(data) {
    const tagName = data.detail.value.trim()      
    this.setData({
      'tagChooseController.keyword': tagName
    })
    this.getRelatedKeyword()
    return {
      value: tagName
    }
  },

  /**
   * 绑定 选择标签的事件
   */
  bindSelectTag(event) {
    // 添加标签到 tags 数组
    const tagname = event.target.dataset.tagname
    // tags没有重复就添加, 且标签数限制为 <= 5
    if (this.data.tags.indexOf(tagname) === -1 && this.data.tags.length <= 5) {
      const tmpTags = this.data.tags
      tmpTags.push(tagname)
      this.setData({
        tags: tmpTags
      })
    }
    // 关闭 action sheet
    this.bindCloseActionSheet()
  },

  /**
   * 获取最新的关键词，需要 **防抖**
   */
  getRelatedKeyword() {
    throttle(() => {
      console.log(10)
      db.collection('tags').where({

      }).get().then(res => {

      }).catch(err => {
        console.error()
      })
    }, 1000)()
  },

  /**
   * 在数据库中创建新标签
   * @param tagname {string} 标签名
   */
  async createNewTagOnCloud(tagname) {
    if (!tagname || tagname === '')
      return;
    await db.collection('tags').where({
      tagname
    }).get().then(async res => {
      if (!res.data.length) return
      db.collection('tags').add({
        data: {
          name: tagname,
          heat: 0,
          referNum: 0
        }
      }).then((res) => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    }).catch(err => {
      console.error(err)
    })
  },

  /**
   * 绑定选择图片按钮
   */
  bindChooseImage() {
    // 重定向对 this 的引用
    const self = this;
    const imgsNum = this.data.images.length
    if (imgsNum >= 9) {
      wx.showToast({
        title: '最多上传9张图片哟',
        icon: 'none'
      })
      return
    }
    wx.chooseImage({
      count: 9 - imgsNum,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // 没有数据，退出
        if (res.tempFilePaths.length <= 0) return;
        // 长度已经大于等于9，退出
        if (self.data.images.length > 8) return;

        // 获取图片
        const tmp = self.data.images
        tmp.push(res.tempFilePaths[res.tempFilePaths.length - 1])

        self.setData({
          images: tmp
        })
      },
      fail: e => {
        wx.showToast({
          title: '取消添加',
          icon: 'none'
        })
      }
    })
  },

  /**
   * 点击图片的图片预览功能
   */
  bindPreviewImage(event) {
    const index = event.target.dataset.index ? event.target.dataset.index : 0
    wx.previewImage({
      urls: this.data.images,
      current: this.data.images[index]
    })
  },

  bindRemoveImage(event) {
    const index = event.target.dataset.index ? event.target.dataset.index : 0
    const tmpImgs = this.data.images
    tmpImgs.splice(index, 1)
    this.setData({
      images: tmpImgs
    })
  },

  /**
   * 上传按钮
   */
  async bindUploadConfession(event) {
    try {
      const isAnonymous = event.target.dataset.isanonymous == 1

      if (!this.data.images.length && !this.data.content){
        wx.showToast({
          title: '您还没有添加图片或文字呢~',
          icon: 'none'
        })
        return
      }
      // 批量上传图片

      const cloudImgArray = [] // 云端文件路径数组
      for (let i = 0; i < this.data.images.length; ++i) {
        wx.showLoading({
          title: `正在上传第 ${i + 1}/${this.data.images.length} 张图片`,
        })
        // 上传图片
        const filePath = this.data.images[i]
        // const cloudPath = getFileCloudPath(filePath)
        // const res = await uploadFileSync(filePath, cloudPath)
        cloudImgArray.push(res.fileID)
        wx.hideLoading()
      }

      // 上传其他信息
      wx.showLoading({
        title: '上传中',
      })
      apiUploadConfession({
        content: this.data.content,
        tags: this.data.tags,
        time: Math.floor(Date.now() / 1000),
        likes: 0,
        comments: [],
        images: cloudImgArray,
        isAnonymous
      }).then(res => {
        wx.hideLoading()
        wx.showToast({
          title: '上传成功',
          icon: 'success'
        })
        wx.navigateBack()
      }).catch(err => {
        wx.hideLoading()
        wx.showToast({
          title: '上传失败',
          icon: 'none'
        })
        console.error(err)
      })
    } catch (err) {
      console.error('上传失败：', err)
      wx.showToast({
        icon: 'none',
        title: '上传失败，请稍后重试',
      })
    }
  }
})