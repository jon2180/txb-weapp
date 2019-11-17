
const getSetting = () => new Promise((resolve, reject) => {
  wx.getSetting({
    success: res => resolve(res),
    fail: (err) => reject(err),
    complete(res) {
      console.log(res)
    },
  })
})


module.exports = {
  getSettingSync: getSetting
}
