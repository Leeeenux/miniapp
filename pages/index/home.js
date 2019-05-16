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
    var studentId = options.studentId
    that.setData({
      studentName: app.globalData.studentId,
      className: app.globalData.className,
      studentId: app.globalData.studentId,
      classId: app.globalData.classId,
      windowWidth: app.globalData.windowWidth,
      windowHeight: app.globalData.windowHeight
    })
  },
  faceClick(){
    wx.navigateTo({
      url: '/pages/create/index?studentId=' + this.data.studentId
    })
  },
  leaveClick(){
    wx.navigateTo({
      url: '/pages/leave/index?studentId=' + this.data.studentId
    })
  },
  signClick(){
    wx.navigateTo({
      url: '/pages/attendance/index?studentId=' + this.data.studentId + '&classId=' + this.data.classId
    })
  },
  recordClick() {
    wx.navigateTo({
      url: '/pages/record/index?studentId=' + this.data.studentId
    })
  },
  click(){
    console.log(getApp().globalData)
  }
})