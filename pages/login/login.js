// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchEye: true,
    isDisabled: true,
    params: {
      username: '',
      password: ''
    }
  },

  inputContent (e) {
    if (e.target.id == 'username') {
      this.setData({
        'params.username': e.detail.value
      })
    }
    if (e.target.id == 'password') {
      this.setData({
        'params.password': e.detail.value
      })
    }

    if (this.data.params.username && this.data.params.password) {
      this.setData({
        isDisabled: false
      });
    }
  },

  checkData (params) {
    let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    console.log(reg);
    console.log(params.username);
    // if (!params.username.test(reg)) {
    //   wx.showToast({
    //     title: '邮箱格式不正确',
    //     icon: 'none',
    //     duration: 2000
    //   });
    // }
  },

  doLogin () {
    this.checkData(this.data.params);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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