/**
 * 红包项目
 * 
 * author: lingxiao
 * createTime: 2017-01-12
 */
var express = require('express');
var router = express.Router();
/*
 * 路由
 *
 * /redpacket
 * */
//经纪人
router.get('/app/user/popularize', function(req, res) {
	//模拟数据
	var data = {
		  "result": "SUCCESS",
		  "message": "操作成功",
		  "code": "1001",
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
    res.json(JSON.stringify(data));
});
router.get('/index', function(req, res) {
  //res.render('index.html');
});

//返回router对象
module.exports = router;
