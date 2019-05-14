// pages/index/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://192.168.199.101/student/info',
      data: {
        studentId: options.studentId
      },
      success: function (res) {
        that.setData({
          studentName: res.data.studentName,
          className: res.data.className,
          studentId: res.data.studentId,
          classId: res.data.classId
        })
        console.log(res.data)
      }
    })
    that.setData({
      windowWidth: app.globalData.windowWidth,
      windowHeight: app.globalData.windowHeight
    })
  },
  faceClick(){
    wx.navigateTo({
      url: '/pages/create/index?studentId=' + this.data.studentId
    })
  },
  atdClick(){
   
  },
  signClick(){
    wx.navigateTo({
      url: '/pages/attendance/index?studentId=' + this.data.studentId + '&classId=' + this.data.classId
    })
  }
})