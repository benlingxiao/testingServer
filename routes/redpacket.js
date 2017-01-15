/**
 * 红包项目
 * 
 * author: lingxiao
 * createTime: 2017-01-12
 */
var express = require('express');
var router = express.Router();

var _path = '/Users/lingxiao/git/testingServer/public';


/*
 * 路由
 *
 * /redpacket
 * */
//首页
router.get('/game/index', function(req, res){
	var data = {
		  "result": "SUCCESS",
		  "message": "操作成功",
		  "code": "1001",
		  "url": "",
		  "data": {
		    "onlineCount": 1,
		    "rooms": [
		      {
		        "id": 1,
		        "gtid": 1,
		        "name": "红包",
		        "password": null,
		        "paymoney": null,
		        "getrate": null,
		        "grabsecond": null,
		        "countdown": null,
		        "type": null,
		        "people": null,
		        "getmoney": 0,
		        "mechine": 0
		      },
		      {
		        "id": 2,
		        "gtid": 2,
		        "name": "牛牛",
		        "password": null,
		        "paymoney": null,
		        "getrate": null,
		        "grabsecond": null,
		        "countdown": null,
		        "type": null,
		        "people": null,
		        "getmoney": 0,
		        "mechine": 0
		      },
		      {
		        "id": 3,
		        "gtid": 3,
		        "name": "扫雷",
		        "password": null,
		        "paymoney": null,
		        "getrate": null,
		        "grabsecond": null,
		        "countdown": null,
		        "type": null,
		        "people": null,
		        "getmoney": 0,
		        "mechine": 0
		      }
		    ],
		    "description": "公告内容11111"
		  }
		}

	res.json(data);
});
//登陆
router.get('/app/user/login',function(req,res){
	console.log(req.param('account')+','+req.param('password'));
	var data = {
		  "result": "SUCCESS",
		  "message": "登陆成功",
		  "code": "1001",
		  "url": "",
		  "data": {
		    "id": 1,
		    "account": "xiao1",
		    "password": "E10ADC3949BA59ABBE56E057F20F883E",
		    "nickname": "hahah",
		    "money": 90,
		    "lock": false,
		    "unlocktime": null,
		    "createtime": "2016-12-19 22:54:29",
		    "pid": null,
		    "uuid": "123123213",
		    "type": 0,
		    "phone": "13488888888",
		    "sex": "男",
		    "rebate": null,
		    "sonusernum": null,
		    "grid": null
		  }
		}
	res.json(data);
});
//注册
router.get('/app/user/reg',function(req,res){
	console.log(req.param('account'));
	console.log(req.param('password'));
	console.log(req.param('uuid'));
	console.log(req.param('nickname'));
	var data = {
		  "result": "SUCCESS",
		  "message": "该帐号已注册",
		  "code": "1001",
		  "url": "",
		  "data": ""
		}
	res.json(data);
});
//好友房
router.get('/game/personal',function(req,res){
	var data = {
		  "result": "SUCCESS",
		  "message": "操作成功",
		  "code": "1001",
		  "url": "",
		  "data": [
		    {
		      "id": 2,
		      "gtid": 2,
		      "name": "牛牛",
		      "password": 123456,
		      "paymoney": 5,
		      "getrate": 0.2,
		      "grabsecond": null,
		      "countdown": null,
		      "type": 1,
		      "people": 200,
		      "getmoney": 0,
		      "mechine": 10,
		      "online": 10

		    },
		    {
		      "id": 3,
		      "gtid": 3,
		      "name": "扫雷",
		      "password": '',
		      "paymoney": null,
		      "getrate": null,
		      "grabsecond": null,
		      "countdown": null,
		      "type": 1,
		      "people": null,
		      "getmoney": 0,
		      "mechine": 0,
		      "online": 10
		    },
		    {
		      "id": 4,
		      "gtid": 1,
		      "name": "接龙",
		      "password": null,
		      "paymoney": null,
		      "getrate": null,
		      "grabsecond": null,
		      "countdown": null,
		      "type": 1,
		      "people": null,
		      "getmoney": 0,
		      "mechine": 0,
		      "online": 10
		    }
		  ]
		}
	res.json(data);
});
//个人中心
router.get('/app/user/info',function(req,res){
	var data = {
		  "result": "SUCCESS",
		  "message": "",
		  "code": "1001",
		  "url": "",
		  "data": {
		    "id": 1,
		    "account": "xiao1",
		    "password": "E10ADC3949BA59ABBE56E057F20F883E",
		    "nickname": "hahah",
		    "money": 90,
		    "lock": false,
		    "unlocktime": null,
		    "createtime": "2016-12-19 22:54:29",
		    "pid": null,
		    "uuid": "123123213",
		    "type": 0,
		    "phone": "13488888888",
		    "sex": "男",
		    "rebate": null,
		    "sonusernum": null,
		    "grid": null
		  }
		}
	res.json(data);
});
//个人中心-金币转增
router.get('/app/user/donation',function(req,res){
	console.log(req.param('account'));
	console.log(req.param('number'));
	var data = {
		  "result": "SUCCESS",
		  "message": "操作成功",
		  "code": "1001",
		  "url": "",
		  "data": ""
		}
	res.json(data);
});
//个人中心-信息更新
router.get('/app/user/update',function(req,res){
	//nickname='+nickname+'&phone='+phone+'&sex='+sex+'&password='+password,
	console.log(req.param('nickname'));
	console.log(req.param('phone'));
	console.log(req.param('sex'));
	console.log(req.param('password'));
	var data = {
		  "result": "SUCCESS",
		  "message": "操作成功",
		  "code": "1001",
		  "url": "",
		  "data": {
		    "id": 1,
		    "account": null,
		    "password": "E10ADC3949BA59ABBE56E057F20F883E",
		    "nickname": "hahah",
		    "money": null,
		    "lock": null,
		    "unlocktime": null,
		    "createtime": null,
		    "pid": null,
		    "uuid": null,
		    "type": null,
		    "phone": "13488888888",
		    "sex": "男",
		    "rebate": null,
		    "sonusernum": null,
		    "grid": null
		  }
		}
	res.json(data);
});

//经纪人
router.get('/app/user/popularize', function(req, res) {
	//模拟数据
	var data = {
		  "result": "SUCCESS",
		  "message": "操作成功",
		  "code": "1002",
		  "url": "",
		  "data": {
		    "popularizes": [
		      {
		        "id": 2,
		        "account": "xiao2",
		        "password": "123",
		        "nickname": "kylinshaw",
		        "money": 120,
		        "lock": false,
		        "unlocktime": null,
		        "createtime": "2016-12-19 22:54:29",
		        "pid": 1,
		        "uuid": "123123213",
		        "type": 0,
		        "phone": null,
		        "sex": null,
		        "rebate": null,
		        "sonusernum": null,
		        "grid": null
		      },
		      {
		        "id": 3,
		        "account": "xiao3",
		        "password": "123",
		        "nickname": "kylinshaw",
		        "money": 100,
		        "lock": false,
		        "unlocktime": null,
		        "createtime": "2016-12-19 22:54:29",
		        "pid": 1,
		        "uuid": "123123213",
		        "type": 0,
		        "phone": null,
		        "sex": null,
		        "rebate": null,
		        "sonusernum": null,
		        "grid": null
		      },
		    ],
		    "user": {
		      "id": 1,
		      "account": "xiao1",
		      "password": "E10ADC3949BA59ABBE56E057F20F883E",
		      "nickname": "hahah",
		      "money": 80,
		      "lock": false,
		      "unlocktime": null,
		      "createtime": "2016-12-19 22:54:29",
		      "pid": null,
		      "uuid": "123123213",
		      "type": 1,
		      "phone": "13488888888",
		      "sex": "男",
		      "rebate": null,
		      "sonusernum": null,
		      "grid": null
		    }
		  }
		}
    res.json(data);
});


//图片
//?type=type
router.get('/game/qrcode', function(req, res) {
  var type = req.param('type');
  //判断是那个图片
  if(type == 'bigimg'){
  	res.sendFile(_path + '/redpacket/index.jpg');
  }else if(type == 'service'){
	res.sendFile(_path + '/redpacket/qrcode.jpg');
  }else if(type == 'withdraw'){
	res.sendFile(_path + '/redpacket/qrcode.jpg');
  }else if(type == 'recharge'){
	res.sendFile(_path + '/redpacket/qrcode.jpg');
  }else{}
});

//返回router对象
module.exports = router;
