// pages/attendance/index.js
const app = getApp()

Page({
  data: {
    windowWidth: 0,
    windowHeight:0,
    CameraShow: false,
    notice:'点击“一键录入”后请保持头部置于镜头中央保持3s不动'
  },
  onLoad(options){
    var that = this
    console.log()
    this.ctx = wx.createCameraContext()
    this.setData({
      windowWidth: app.globalData.windowWidth,
      windowHeight: app.globalData.windowHeight,
      studentId: options.studentId,
      CameraShow: true
    })
    // wx.getSystemInfo({
    //   success(res) {
    //     that.setData({
    //       windowWidth:res.windowWidth,
    //       windowHeight: res.windowHeight,
    //       studentId: options.studentId,
    //       CameraShow:true
    //     })
    //   }
    // })
  },
  takePhoto:function() {
    var that = this
    this.ctx.takePhoto({
      quality: 'low',
      success: (res) => {
        wx.navigateTo({
          url: 'field?src=' + res.tempImagePath + '&studentId=' + that.data.studentId,
        })
        
        // this.setData({

        //   src: res.tempImagePath
        // })
      }
    })
  },
  SignClick:function(){
    var that = this
    that.setData({
      isLoading:true,
      notice:'人脸识别中……请保持不动'
    })
    setTimeout(function (){//延时三秒钟拍摄
      that.takePhoto()
      that.setData({
        isLoading: false,
        notice: '点击“一键签到”后请保持头部置于镜头中央保持3s不动'
      })
    }, 3000);
    
  }
})