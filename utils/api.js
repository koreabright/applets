import Mock from './mock.js';
import loginRes from '../mocks/js/login.js';
import carteamList from '../mocks/js/carteamList.js';
import allCities from '../mocks/js/config/cities.js';

let app = getApp();  
let host = app.globalData.host;
let isDev = true;
let mockRouter = [
  {
    rurl: '/api/login',
    data: loginRes
  },
  {
    rurl: '/api/carteam/list',
    data: carteamList
  },
  {
    rurl: '/api/get_all',
    data: allCities
  }
]

function ajax(url, fn, type = 'GET', data = {}) {
  if (!isDev) {
    wx.request({
      url: host + url,
      data: data,
      method: type,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        fn(res);
      },
      fail: (res) => {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        });
      }
    });
  } else {
    let res = null;

    for (let key in mockRouter) {
      res = Mock.mock(mockRouter[key].data);
    }

    if (res.code) {
      wx.showToast({
        title: res.msg,
        icon: 'none',
        duration: 2000
      });
      return;
    }
    // 模拟数据
    fn(res);
  }
}

module.exports = {
  ajax: ajax
}