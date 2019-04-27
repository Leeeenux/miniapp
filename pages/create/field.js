// pages/create/field.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice:'请信息核对无误后提交,如信息有误请联系教务处电话888888',
  src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1435353117,3471688688&fm=26&gp=0.jpg',
  name:'张三',
  classId:101,
  className:'15软件2班',
  studentId:'1507755'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      src: options.src
    })
    wx.getFileSystemManager().readFile({
      filePath: that.data.src,
      encoding: 'base64',
      success: res => {
        that.setData({
          ImageBase64: res.data
        })
        console.log(res.data)
      }
    })
  }, 
  ImageOnload:function(e){
    var that = this
    var windowWidth
    wx.getSystemInfo({
      success(res) {
        windowWidth = res.windowWidth
      }
    })
    var ImageWidth = windowWidth*0.5
    var scale = e.detail.width / e.detail.height
    var ImageHeight = ImageWidth / scale
    that.setData({
      windowWidth: windowWidth,
      ImageWidth: ImageWidth,
      ImageHeight: ImageHeight
    })
    console.log(ImageWidth)
    console.log(e.detail)
    console.log(ImageHeight)
  },
  remake:function(){
    wx.navigateBack({
      url:'index'
    })
  },
  submit:function(){
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          latitude: latitude,
          longitude: longitude
        })
        console.log(res)
      }
    })
  }
})