// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  // 自定义data 
  data: {
    title:"Sign in",
    url:"http://39.100.86.3:8017",
    img:''
  },

  // 获取input值
  username:function(e){
    let val = e.detail.value;
    this.setData({
      username:val
    })
  },
  password:function(e){
    let val = e.detail.value;
    this.setData({
      password:val
    })
  },
  achive:function(e){
    let val = e.detail.value;
    this.setData({
      achive:val
    })
  },

  // 获取验证码
  checking:function(){
    let that = this;
    wx.request({
      url:that.data.url+'/captchaImage',
      fail:function(res){
        console.log(res)
      },
      success(res){
        console.log(res.data)
        let imgUrl = "data:image/png;base64,"+res.data.img;
        imgUrl = imgUrl.replace(/[\r\n]/g,"");
        console.log(imgUrl)
        that.setData({
          // baseImgUrl:"data:image/gif;base64,"+res.data.img,
          img : imgUrl,
          uuid:res.data.uuid
        })
      }
    })
  },

  // 登录
  Sign:function(){
    // wx.switchTab({
    //   url:'/pages/Mine/Mine',
    // })
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url:that.data.url+'/captchaImage',
      fail:function(res){
        console.log(res)
      },
      success(res){
        console.log(res.data)
        let imgUrl = "data:image/png;base64,"+res.data.img;
        imgUrl = imgUrl.replace(/[\r\n]/g,"");
        console.log(imgUrl)
        that.setData({
          // baseImgUrl:"data:image/gif;base64,"+res.data.img,
          img : imgUrl,
          uuid:res.data.uuid
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})