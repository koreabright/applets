let Mock = require('./mock.js');
let json = require('../mocks/login.js');

function ajax(fn) {

    // 模拟数据
  var res = Mock.mock('/api/login', json)

    fn(res);

}
module.exports = {
  ajax: ajax
}