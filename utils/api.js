import Mock from './mock.js';
import loginRes from '../mocks/login.js';
let app = getApp();  
let host = app.globalData.host;
let isDev = true;
let mockRouter = [
  {
    rurl: '/api/login',
    data: loginRes
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
      }
    });
  } else {
    let res = null;

    for (let key in mockRouter) {
      res = Mock.mock(mockRouter[key].rurl, mockRouter[key].data);
    }

    // 模拟数据
    fn(res);
  }
}

module.exports = {
  ajax: ajax
}