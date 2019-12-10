// pages/upload/commodity/commodity.js

// import {
//   uploadFileSync
// } from '../../../utils/wx-api.js'

Page({

  data: {
    /** 商品标题 */
    title: '',
    /** 商品描述 */
    desc: '',
    /** 商品图片 */
    imgList: [],
    /** 商品分类 */
    category: '',
    /** 商品价格 */
    price: undefined,
    /** 商品关键词 */
    keywords: [],
    /** 商品新旧程度，百分制。 */
    index: 0,

    /** 是否显示分类选择面板 */
    showCategoryPanel: false,
    /** 所有分类 */
    categories: [],

  },

  onLoad: function(options) {
    this.setData({
      ['images[' + 0 + ']']: '../../../images/add.png',
    })
  },

  bindInputTitle(e) {
    console.log(e)
  },

  bindPickCategory(e) {
    console.log(e)
  },

  afterRead() {

  },

  bindCloseCategoriesPanel(e) {
    this.setData({
      showCategoryPanel: false
    })
  }
})