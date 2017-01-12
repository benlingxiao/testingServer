# testingServer
用来做简单的前端接口交互测试，减少与后端沟通过程中时间的浪费

#使用方法
1. 使用git下载到本地
```
$ git clone https://github.com/benlingxiao/testingServer.git
```
2. 安装依赖
```
$ npm install
```
3. 启动
```
$ npm start
```

#自定义路由
在routes路径下新建一个route.js
```
var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```
然后在app.js的逻辑代码部分添加
```
var route = require('./route');
app.use('/route', route);
```
运行就可以了