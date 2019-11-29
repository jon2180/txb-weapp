// pages/upload/commodity/commodity.js

// import {
//   uploadFileSync
// } from '../../../utils/wx-api.js'

Page({

  data: {
    name: '',
    remark: '',
    images: [],
    classes: [{
      'class1st': '美妆个护',
      'content': [{
        'class1st': '美妆个护',
        'class2nd': '唇部',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/美妆个护_唇部.jpg'
      }, {
        'class1st': '美妆个护',
        'class2nd': '面部',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/美妆个护_面部.jpg'
      }, {
        'class1st': '美妆个护',
        'class2nd': '眼部',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/美妆个护_眼部.jpg'
      }, {
        'class1st': '美妆个护',
        'class2nd': '美甲',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/美妆个护_美甲.jpg'
      }, {
        'class1st': '美妆个护',
        'class2nd': '护肤',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/美妆个护_护肤.jpg'
      }, {
        'class1st': '美妆个护',
        'class2nd': '香水',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/美妆个护_香水.jpg'
      }, {
        'class1st': '美妆个护',
        'class2nd': '其他',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/其他.png'
      }, ]
    }, {
      'class1st': '数码电子',
      'content': [{
        'class1st': '数码电子',
        'class2nd': '电脑配件',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/数码电子_电脑.png'
      }, {
        'class1st': '数码电子',
        'class2nd': '手机',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/数码电子_手机.png'
      }, {
        'class1st': '数码电子',
        'class2nd': '手环',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/数码电子_手环.png'
      }, {
        'class1st': '数码电子',
        'class2nd': '其他',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/其他.png'
      }, ]
    }, {
      'class1st': '生活用品',
      'content': [{
        'class1st': '生活用品',
        'class2nd': '桌面摆设',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/生活用品_桌面摆设.jpg'
      }, {
        'class1st': '生活用品',
        'class2nd': '床上用品',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/生活用品_床上用品.jpg'
      }, {
        'class1st': '生活用品',
        'class2nd': '运动装备',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/生活用品_运动装备.jpg'
      }, {
        'class1st': '生活用品',
        'class2nd': '宿舍电器',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/生活用品_宿舍电器.jpg'
      }, {
        'class1st': '生活用品',
        'class2nd': '其他',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/其他.png'
      }, ]
    }, {
      'class1st': '服装配饰',
      'content': [{
        'class1st': '服装配饰',
        'class2nd': '女装',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/服装配饰_女装.jpg'
      }, {
        'class1st': '服装配饰',
        'class2nd': '男装',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/服装配饰_男装.jpg'
      }, {
        'class1st': '服装配饰',
        'class2nd': '女性配饰',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/服装配饰_女性配饰.jpg'
      }, {
        'class1st': '服装配饰',
        'class2nd': '男性配饰',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/服装配饰_男性饰品.jpg'
      }, {
        'class1st': '服装配饰',
        'class2nd': '其他',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/其他.png'
      }, ]
    }, {
      'class1st': '休闲零食',
      'content': [{
        'class1st': '休闲零食',
        'class2nd': '休闲零食',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/休闲零食.png'
      }, ]
    }, {
      'class1st': '二手书籍',
      'content': [{
        'class1st': '二手书籍',
        'class2nd': '课外书籍',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/二手书籍_课外书籍.png'
      }, {
        'class1st': '二手书籍',
        'class2nd': '教材教辅',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/二手书籍_教材教辅.png'
      }, {
        'class1st': '二手书籍',
        'class2nd': '其他',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/其他.png'
      }, ]
    }, {
      'class1st': '水果生鲜',
      'content': [{
        'class1st': '水果生鲜',
        'class2nd': '水果生鲜',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/水果生鲜.png'
      }, ]
    }, {
      'class1st': '交通工具',
      'content': [{
        'class1st': '交通工具',
        'class2nd': '交通工具',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/交通工具.png'
      }, ]
    }, {
      'class1st': '票务卡券',
      'content': [{
        'class1st': '票务卡券',
        'class2nd': '电影票',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/票务卡券_电影票.png'
      }, {
        'class1st': '票务卡券',
        'class2nd': '优惠券',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/票务卡券_优惠券.png'
      }, {
        'class1st': '票务卡券',
        'class2nd': '其他',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/其他.png'
      }, ]
    }, {
      'class1st': '其他',
      'content': [{
        'class1st': '其他',
        'class2nd': '其他',
        'src': 'cloud://nju.6e6a-nju-1300183665/secondhandimage/classes/其他.png'
      }, ]
    }, ],
    hideclass: true,
    class1st: '',
    class2nd: '',
    conditions: ['五成新', '六成新', '七成新', '八成新', '九成新','九九新'],
    condition: null,
    price: null,
  },

  onLoad: function(options) {
    this.setData({
      ['images[' + 0 + ']']: '../../../images/add.png',
    })
  },

  inputinfo: function(e) {
    let kind = e.currentTarget.dataset.kind;
    if (kind == 'name')
      this.setData({
        name: e.detail.value
      })
    else if (kind == 'remark')
      this.setData({
        remark: e.detail.value
      })
    else if (kind == 'price')
      this.setData({
        price: e.detail.value
      })
  },

  chooseimage: function(e) {
    let seq = e.currentTarget.dataset.seq;
    let command = e.currentTarget.dataset.command;
    let imagelength = this.data.images.length;
    if (this.data.images[imagelength - 1] == '../../../images/add.png')
      imagelength--;
    if(command=='enlarge'){
      if (seq == this.data.images.length - 1) {
        if (this.data.images.length > 6)
          return;
        wx.chooseImage({
          count: 6 - seq,
          sizeType: ['compressed'],
          sourceType: ['album', 'camera'],
          success: res => {
            for (let i = 0; i < res.tempFilePaths.length; i++)
              this.data.images.splice(seq+i, 0, res.tempFilePaths[i])
            this.setData({
              images: this.data.images,
            })
          },
        })
      } else {
        wx.previewImage({
          current: this.data.images[seq],
          urls:this.data.images.slice(0,imagelength),
        })
      }
    }
    else if(command=='delete'){
      this.data.images.splice(seq, 1);
      this.setData({
        images: this.data.images,
      })
    }
  },

  bindclass: function() {
    this.setData({
      hideclass: false,
    })
  },

  chooseclasscancel: function() {
    this.setData({
      hideclass: true,
    })
  },

  chooseclass: function(e) {
    this.setData({
      hideclass: true,
      class1st: e.currentTarget.dataset.class12.class1st,
      class2nd: e.currentTarget.dataset.class12.class2nd,
    })
  },

  bindcondition: function(e) {
    this.setData({
      condition: e.detail.value
    })
  },

  publish: async function() {
    let imagelength = this.data.images.length;
    if (this.data.images[imagelength - 1] == '../../../images/add.png')
      imagelength--;
    if (!this.data.name) {
      wx.showToast({
        title: '请输入商品名',
        icon: 'none',
      })
    }
    else if(!imagelength){
      wx.showToast({
        title: '请上传图片',
        icon: 'none',
      })
    }
    else if(!this.data.class1st){
      wx.showToast({
        title: '请选择分类',
        icon: 'none',
      })
    }
    else if(!this.data.condition){
      wx.showToast({
        title: '请选择成色',
        icon: 'none',
      })
    }
    else if(!this.data.price){
      wx.showToast({
        title: '请输入价格',
        icon: 'none',
      })
    }
    else {
      // 上传图片
      const cloudPath = [];
      for (let i = 0; i < imagelength; i++) {
        wx.showLoading({
          title: `正在上传第 ${i + 1}/${imagelength} 张图片`,
        })
        let filePath = this.data.images[i]
        let temp = 'secondhandimage/' + Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 9999) + filePath.match(/\.[^.]+?$/)[0]
        // let res = await uploadFileSync(filePath, temp)
        cloudPath.push(res.fileID)
        wx.hideLoading()
      }
      // 上传其他
      wx.showLoading({
        title: '上传中',
      })
      const db = wx.cloud.database();
      db.collection('secondhand').add({
        data: {
          name: this.data.name,
          remark: this.data.remark,
          time: Math.floor(Date.now() / 1000),
          images: cloudPath,
          class1st: this.data.class1st,
          class2nd: this.data.class2nd,
          condition: this.data.conditions[this.data.condition],
          price: this.data.price,
        },
        success: res => {
          wx.hideLoading()
          wx.showToast({
            title: '上传成功',
            icon: 'success'
          })
          wx.navigateBack()
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '上传失败'
          })
          console.error('[数据库] [新增记录] 失败：', err)
        }
      })
    }
  },

})