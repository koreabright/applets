// pages/login/login.js
const app = getApp();
const API = require('../../utils/api.js');
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

  onLoad () {
    wx.setNavigationBarTitle({
      title: '登录'
    })
  },
  /**
   * 输入用户名和密码
   */
  inputContent (e) {
    if (e.target.id == 'username') {
      this.setData({
        'params.username': e.detail.value
      });
    }
    if (e.target.id == 'password') {
      this.setData({
        'params.password': e.detail.value
      });
    }

    if (this.data.params.username && this.data.params.password) {
      this.setData({
        isDisabled: false
      });
    }
  },
   /**
   * 切换明文显示密码
   */
  switchEye (e) {
    this.setData({
      switchEye: !this.data.switchEye
    });
  },
   /**
   * 登录时校验数据格式
   */
  checkData (params) {
    let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (params.username.length < 2) {
      wx.showToast({
        title: '邮箱长度大于2',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
    if (params.password.length < 2) {
      wx.showToast({
        title: '密码长度大于2',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
    return true;
  },
   /**
   * 登录
   */
  doLogin () {
    let check = this.checkData(this.data.params);
    if (!check) {
      return;
    }

    API.ajax(
      '/api/login',
      (res) => {
        wx.switchTab({
          url: '/pages/carteam/list/list'
        })
      },
      'GET',
      this.data.params
    );
  }
})