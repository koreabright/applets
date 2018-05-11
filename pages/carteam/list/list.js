// pages/carteam/list/list.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    isShow: false,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '车队长列表'
    });
    this.getList();
  },

  getList () {
    wx.request({
      url: app.globalData.host + '/api/preloan/prlcaptains/captainlist',
      data: {},
      method: "GET",
      success: (res) => {
        console.log(res);
        this.setData({
          list: res.data.info.list
        });
      }
    })
  },
  /**
   * 打电话
   */
  toCall (e) {
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.mobile
    })
  },

  /**
   * 去详情
   */
  gotoDetail (e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/carteam/detail/detail?id=' + e.target.dataset.itemid
    })
  },

  scrollFn (e) {
    if (e.detail.scrollTop > 100) {
      this.setData({
        isShow: true
      });
    } else {
      this.setData({
        isShow: false
      });
    }
  },
  /**
   * 回到顶部
   */
  gotoTop (e) {
    this.setData({
      scrollTop: 0
    });
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