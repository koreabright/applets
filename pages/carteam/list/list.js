// pages/carteam/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    list: [
      {
        id: 1,
        name: "张三",
        mobile: "18600232995",
        companyName: "北京市四方达物流有限公司",
        address: "北京市昌平区北七家王麻子路365号院"
      },
      {
        id: 2,
        name: "李四",
        mobile: "13200000000",
        companyName: "北京市四方达物流有限公司",
        address: "北京市昌平区北七家王麻子路365号院"
      },
      {
        id: 3,
        name: "张三",
        mobile: "18600232995",
        companyName: "北京市四方达物流有限公司",
        address: "北京市昌平区北七家王麻子路365号院"
      },
      {
        id: 4,
        name: "李四",
        mobile: "13200000000",
        companyName: "北京市四方达物流有限公司",
        address: "北京市昌平区北七家王麻子路365号院"
      },
      {
        id: 5,
        name: "张三",
        mobile: "18600232995",
        companyName: "北京市四方达物流有限公司",
        address: "北京市昌平区北七家王麻子路365号院"
      },
      {
        id: 6,
        name: "李四",
        mobile: "13200000000",
        companyName: "北京市四方达物流有限公司",
        address: "北京市昌平区北七家王麻子路365号院"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '车队长列表'
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
      url: '/pages/carteam/list/detail?id=' + e.target.dataset.itemid
    })
  },

  scrollFn (e) {
    console.log(e.detail.scrollTop);
    if (e.detail.scrollTop > 0) {
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
    console.log(e);
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
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