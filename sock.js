/**
 * 使用sockjs插件实现模拟websocket
 * @type {[type]}
 */
var express = require('express');
var sockjs  = require('sockjs');
var http    = require('http');
var logger = require('morgan');

// 1. Echo sockjs server
var sockjs_opts = {sockjs_url: "http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js"};

var connection = null;
var sockjs_echo = sockjs.createServer(sockjs_opts);
sockjs_echo.on('connection', function(conn) {
	connection = conn;
	console.log('来了来了');
    conn.on('data', function(message) {
        conn.write(message);
    });
});

// 2. Express server
var app = express(); /* express.createServer will not work here */
var server = http.createServer(app);

app.use(logger('dev'));

sockjs_echo.installHandlers(server, {prefix:'/redpacket/ws'});

console.log('来来来，可以测试websocket了' );
server.listen(3001, '0.0.0.0');

app.get('/',function(req, res){
  res.render('index', { title: '干嘛呢！代码不用写了吗？' });
});
//控制websocket
app.get('/ws/send', function(req, res){
	var type = req.param('type');
	console.log('------------------');
	console.log(type);
	console.log('------------------');
	//进入房间
	if(type == 0){
		//进入房间
		var data = {
			  "result": "SUCCESS",
			  "message": "操作成功",
			  "code": "10002",
			  "url": "",
			  "data": {
			  	"nickname":"哈哈"
			  }
		}
	}else if(type == 1){
		//10秒发红包
		var data = {
			  "result": "SUCCESS",
			  "message": "操作成功",
			  "code": "10007",
			  "url": "",
			  "data": {}
		}
	}else if(type == 2){
		//5秒发红包
		var data = {
			  "result": "SUCCESS",
			  "message": "操作成功",
			  "code": "10008",
			  "url": "",
			  "data": {}
		}
	}else if(type == 3){
		//抢红包成功
		var data = {
			"result": "SUCCESS",
		  	"message": "操作成功",
		  	"code": "10011",
		  	"url": "",
		  	"data": {
			  	"nickname":"哈哈"
			  }
		}
	}else if(type == 4){
		//游戏结果
		var data = {
			"result": "SUCCESS",
		  	"message": "操作成功",
		  	"code": "10014",
		  	"url": "",
		  	"data": {
		  		"min":{
			  		"nickname":"哈哈",
		  			"money":"123"
		  		},
		  		"max":{
		  			"nickname":"哈哈",
		  			"money":"123"
		  		}
			  }
		}
	}else if(type == 5){
		//用户发红包
		var data = {
			"result": "SUCCESS",
		  	"message": "操作成功",
		  	"code": "10009",
		  	"url": "",
		  	"data": {
		  		"isUser": true,
		  		"redpacketId":12,
		  		"nickname":"haha"
			}
		}
	}else if(type == 6){
		//别人发红包
		var data = {
			"result": "SUCCESS",
		  	"message": "操作成功",
		  	"code": "10009",
		  	"url": "",
		  	"data": {
		  		"isUser": false,
		  		"redpacketId":13,
		  		"nickname":"嗯嗯"
			}
		}
	}
	if(connection){
		console.log(data);
		connection.write(JSON.stringify(data));
	}
	res.send(null);
});