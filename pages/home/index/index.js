// home/index/index.js
//获取应用实例
const app = getApp()

import {
  getCmds
} from '../../../api/home.js'

import {
  getSchools
} from '../../../api/me.js'

import {
  list,
  banners
} from './default.data.js'

Page({
  data: {
    placeholderForSearch: '搜索二手商品',
    
    /** 轮播图部分 */
    autoplay: false,
    indicator: true,
    banners: [...banners],

    /** 分类面板 */
    categories: ['美妆', '美妆', '美妆', '美妆', '美妆', '美妆', '美妆', '美妆'],

    /** tab面板 */
    active: '',
    list: list,
    commodities: [...list[0].list],

    showCheckSchool: false,
    schools: [],
  },

  onLoad(options) {
    getCmds().then(res => {
      // console.log(res)
    })
    // console.log(list[0].title)
    // 允许传参数
    if (options)
      console.log(options)

    this.setData({
      active: 0
    })

    // 判断用户是否已确认学校信息
    // 如果没有，则弹出提示窗确认信息
    if (app.globalData.hasUserInfo) {

      // 获取学校信息列表
      getSchools().then(res => {
        if (res.code !== 10000) {
          console.log(res.msg)
          return
        }
        console.log(res.data)
        return
        this.setData({
          showCheckSchool: true,
          schools: res.data
        })
      }).catch(err => {
        console.error(err)
      })

    } else {
      app.userInfoReadyCallback = (res) => {
        console.log('userInfoReadyCallback: ', res)
        this.setData({

        })
      }
    }
  },

  bindChangeTab(e) {
    console.log(e)
  },

  /**
   * @param newCmds {array} 新的数据数组
   */
  insertCommodity(newCmds) {
    // const list = this.data.list
    // newCmds.map((val, ind) => {
    //   if (list.l.length > list.r.length) {
    //     list.r.push(val)
    //   } else {
    //     list.l.push(val)
    //   }
    // })
  },

  bindConfirmSchool(event) {
    const {
      picker,
      /** 当前值 */
      value,
      /** 当前索引 */
      index
    } = event.detail;

    // 确认信息
    getSchools({
      school_id: this.data.schools[index]['id'],
      thr_session: wx.getStorageSync('session_key') || ''
    }).then(res => {
      if (res.code !== 10000) {
        // TODO: 弹出Toast，提示修改失败
        console.log('修改失败')
        return
      }
      // TODO: 弹出Toast，提示修改成功
      console.log('修改成功', res)
    })

    // 关闭悬浮窗
    this.setData({
      showCheckSchool: false
    })
  },

  bindCancelCheckSchool() {
    // 关闭悬浮窗
    this.setData({
      showCheckSchool: false
    })
  }
})