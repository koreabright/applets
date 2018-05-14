// pages/carteam/list/list.js
const app = getApp();
const API = require('../../../utils/api.js');
Page({

  // 页面的初始数据
  data: {
    scrollTop: 0,
    isShow: false,
    list: []
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '车队长列表'
    });
    this.getList();
  },

  // 获取车队长列表
  getList () {
    API.ajax(
      '/api/carteam/list',
      (res) => {
        this.setData({
          list: res.info.list
        });
      },
      'GET'
    );
  },
  // 打电话
  toCall (e) {
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.mobile
    })
  },

  // 新增车队长
  addCarteam () {
    wx.navigateTo({
      url: '/pages/carteam/addCarteam/addCarteam'
    })
  },

  // 去详情
  toDetail (e) {
    wx.navigateTo({
      url: '/pages/carteam/detail/detail?id=' + e.target.dataset.itemid
    });
  },

  // 鼠标滚动
  scrollFn (e) {
    if (e.detail.scrollTop > 50) {
      this.setData({
        isShow: true
      });
    } else {
      this.setData({
        isShow: false
      });
    }
  },
  // 回到顶部
  gotoTop (e) {
    this.setData({
      scrollTop: 0
    })
  }
})