Page({
  data: {
    CameraHeight:600
  },
  onLoad() {
    var that = this
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'low',
      success: (res) => {
        wx.getFileSystemManager().readFile({
          filePath: res.tempImagePath, //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            // console.log('data:image/png;base64,' + res.data)
            console.log(res.data)
            wx.request({
              url: 'http://192.168.199.101/api/face', 
              data: {
                base64: res.data,
                studentid: '1507052316'
              },
              header: {
                'content-type': 'application/json' // 默认值,
              },
              success(res) {
                console.log(res.data)
              }
            })
            this.setData({
              base64:res.data
            })
          }
        })
        // this.setData({
          
        //   src: res.tempImagePath
        // })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  login() {
    wx.request({
      url: 'http://192.168.199.101/user/login',
      data: {
        username: 1001,
        password: 1234
      },
      header: {
        'content-type': 'application/json', // 默认值,
        'token': ''
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  check(){
    wx.request({
      url: 'http://192.168.199.101/api/create',
      data: {
        base64: this.data.base64,
        groupid:'1',
        gender:'1',
        name:'sss',
        studentid: '150706'
      },
      header: {
        'content-type': 'application/json' // 默认值,
      },
      success(res) {
        console.log(res.data)
      }
    })
  }
})