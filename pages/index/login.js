// pages/index/login.js
const app = getApp()

import Toast from '../../dist/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
    this.setData({
      windowWidth: app.globalData.windowWidth,
      windowHeight: app.globalData.windowHeight
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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
    if (this.data.username != '' && this.data.password!=''){
      wx.request({
        url: 'http://192.168.199.101/user/login',
        data: {
          username: this.data.username,
          password: this.data.password
        },
        success(res) {
          if (res.data.success) {
            Toast.success(res.data.msg);
            wx.request({
              url: 'http://192.168.199.101/wechat/info',
              data: {
                studentId: that.data.username
              },
              success: function (res) {
                app.globalData.studentId = res.data.studentId
                app.globalData.studentName = res.data.studentName
                app.globalData.className = res.data.className
                app.globalData.classId = res.data.classId
                console.log(res.data)
                wx.redirectTo({
                  url: 'home?studentId=' + that.data.username
                })
              }
            })
          } else {
            Toast.fail(res.data.msg);
          }
        }
      })
    }else{
      Toast("请输入账号密码");
    }
  }
})