/**
 * 用来便于前端测试的简单的小服务端
 * 基于nodejs的express
 * 
 * author：lingxiao
 * createTime: 2017-01-12
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//localhost:port/返回
app.get('/',function(req, res){
  res.render('index', { title: '干嘛呢！代码不用写了吗？' });
});
/**
 * 逻辑部分
 */
//具体测试部分，引入routes中的路由模块
//红包项目
var redpacket = require('./routes/redpacket');
//将测试路由挂载在app上
app.use('/redpacket',redpacket);


// 如果上面的路由没有，就返回404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
