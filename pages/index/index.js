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
    let that = this
    // if (/^\s+$/gi.test(this.data.username) ||this.data.username.length==0||this.data.username=="undefined") {
    //   wx.showToast({
    //     title: 'title',
    //   })
    //   };
    wx.request({
      url:that.data.url+"/login",
      method:"post",
      data:{
         username : that.data.username,
         password : that.data.password,
         code : that.data.achive,
         uuid : that.data.uuid
      },
      fail:function(res){
        console.log(res)
      },
      success:function(res){
        console.log(res)
        let code = res.data.code
        let msg = res.data.msg
        that.setData({
          msg : msg,
          code : code
        })
        if(code == 200){
          wx.showToast({
            title:res.data.msg,
            icon: 'success',
            duration: 1500
          }),
          wx.switchTab({
            url: '../work/work',
          });
        }else{
          wx.showToast({
            title: res.data.msg,
            image:"/img/提交失败.png"
          })
        }
      }
    } )
  
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
        let imgUrl = "data:image/png;base64,"+res.data.img;
        imgUrl = imgUrl.replace(/[\r\n]/g,"");
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