/**
 * 重定向地址到mock地址
 */
function mockHandler(map) {
  return function (context) {
    var pathname = map[context.request.pathname];

    if (!pathname) { // 支持正则匹配
      Object.keys(map).some(function (url) {
        if (new RegExp(url).test(context.request.pathname)) {
          pathname = map[url];
          return true;
        }
      });
    }

    if (pathname.match(/\.php$/)) {
      return php(null, null, function (context) {
        context.request.pathname = pathname;
        return context.request;
      }).call(this, context);
    }
    else {
      var filename = require('path').normalize(__dirname + '/' + pathname);
      context.content = require('fs').readFileSync(filename, 'utf-8');
    }
  };
}

function mockup() {
  return function (context) {
    var pathname = context.request.pathname;
    context.request.pathname = './mock/mockup' + pathname + '.json';
  }
}

exports.port = 8008;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;
console.log('****',__dirname);
exports.getLocations = function () {
  return [
    {
      location: /\/$/,
      handler: home('index.html')
    },
    {
      location: /^\/api\//,
      handler: [
        mockHandler(require('./mocks/json/debug'))
      ]
    },
    {
      location: /^.*$/,
      handler: [
        file(),
        proxyNoneExists()
      ]
    }
  ];
};

/* eslint-disable guard-for-in */
exports.injectResource = function (res) {
  for (var key in res) {
    global[key] = res[key];
  }
};
