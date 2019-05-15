// pages/weixin/test.js
import Toast from '../../dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    StartDate: '', //new Date().getTime()
    EndDate: new Date().getTime(),
    startShow: false,
    endShow: false,
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: 'http://192.168.199.101/wechat/info',
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  onStartInput(event) {
    var start = this.format(event.detail)
    this.setData({
      StartDate: start
    });
  },
  onEndInput(event) {
    var end = this.format(event.detail)
    this.setData({
      EndDate: end
    });
  },
  start(event) {
    this.setData({
      startShow: true
    });
  },
  end() {
    this.setData({
      endShow: true
    });
  },
  startConfirm(event) {
    this.setData({
      startShow: false
    });
  },
  endConfirm(event) {
    this.setData({
      endShow: false
    });
  },
  format(shijianchuo) {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
  },
  add0(m) {
    return m < 10 ? '0' + m : m
  },
  submit(){
    var that = this
    wx.request({
      url: 'http://192.168.199.101/wechat/leave',
      data: {
        content: "请假请假",
        time: '2019-05-19 10:20:20',
        studentId: that.data.studentId,
        classId: that.data.classId
      },
      success: function (res) {
        Toast.success('提交成功');
      }
    })
  }
})