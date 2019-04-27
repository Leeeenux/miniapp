// pages/attendance/index.js
Page({
  data: {
    windowWidth: 0,
    windowHeight:0,
    CameraShow: false,
    notice:'点击“一键签到”后请保持头部置于镜头中央保持3s不动'
  },
  onLoad(){
    var that = this
    this.ctx = wx.createCameraContext()
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        that.setData({
          latitude : res.latitude,
          longitude : res.longitude
        })
      }
    })
    wx.getSystemInfo({
      success(res) {
        that.setData({
          windowWidth:res.windowWidth,
          windowHeight: res.windowHeight,
          CameraShow:true
        })
      }
    })
  },
  takePhoto:function() {
    var msg = ''
    var IsMatch = false

    this.ctx.takePhoto({
      quality: 'low',
      success: (res) => {
        wx.getFileSystemManager().readFile({
          filePath: res.tempImagePath, //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            // console.log('data:image/png;base64,' + res.data)
            wx.request({
              url: 'http://192.168.199.101/face/signin',
              data: {
                base64: res.data,
                studentid: '1507052316',
                longitude: this.data.longitude,
                latitude: this.data.latitude
              },
              header: {
                'content-type': 'application/json' // 默认值,
              },
              success(res) {
                wx.navigateTo({
                  url: 'result?msg=' + res.data.msg + '&score=' + res.data.score + '&success=' + res.data.success,
                })
                console.log(res.data)
              }
            })
            this.setData({
              base64: res.data
            })
          }
        })
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