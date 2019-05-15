// pages/attendance/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:'success'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)

    that.setData({
      success: options.success,
      msg: options.msg
    })
    wx.getSystemInfo({
      success(res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        })
      }
    })
  },
  homepage:function(){
    wx.redirectTo({
      url: '/pages/leave/index?studentId=' + this.data.studentId,
    })
  },
  remake:function(){
    wx.navigateBack({
      delta: 1,
    })
  }

})