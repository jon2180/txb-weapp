// components/ImagesBlock/ImagesBlock.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    images: {
      type: Array,
      value: []
    },
    'allow-preview': {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击图片的图片预览功能
     */
    bindPreviewImage(event) {
      const index = event.target.dataset.index ? event.target.dataset.index : 0
      // console.log(index, this.properties.images)
      wx.previewImage({
        urls: this.properties.images,
        current: this.properties.images[index]
      })
    },
  }
})