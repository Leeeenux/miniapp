// pages/index/login.js
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

  },
  userNameInput:function(e){
    this.setData({
      username: e.detail.value
    })
  },
  passWordInput:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  login:function(){
    var that = this
    wx.request({
      url: 'http://192.168.199.101/user/login',
      data: {
        username: this.data.username,
        password: this.data.password
      },
      success(res) {
        console.log(res.data)
      }
    })
  }
})