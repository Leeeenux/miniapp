// pages/index/login.js
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
            wx.setStorage({
              key: 'studentId',//查看缓存里是否有studentId
              data: that.data.username,
              success: function (res) {
                wx.redirectTo({
                  url: 'home'
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