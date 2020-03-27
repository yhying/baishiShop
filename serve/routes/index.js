var express = require('express');
var router = express.Router();
var connection = require('../db/Sql.js')
var user = require('../db/user.js');
// 跨域解决
router.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});
			router.post('/api/register', function(req, res, next) {
				//前端给后端的数据
				let params = {
					userName: req.body.phone
				}
				//查询用户名或者手机号存在不存在
				connection.query(user.queryUserName(params), function(error, results, fields) {
					console.log(results.length)
					if (results.length > 0) {
						res.send({
							data: {
								success: false,
								msg: "该手机号已被注册"
							}
						})
					} else {
						res.send({
							data: {
								success: true
							}
						})
					}
				})
			});
			//用户登录
			router.post('/api/login', function(req, res, next) {
				//前端给后端的数据
				let params = {
					userName: req.body.userName,
					userPwd: req.body.userPwd
				}
				//查询用户名或者手机号存在不存在
				connection.query(user.queryUserName(params), function(error, results, fields) {
					if (results.length > 0) {
						connection.query(user.queryUserPwd(params), function(err, result) {
							// console.log(result)
							console.log(result.length)
							if (result.length > 0) {
								res.send({
									data: {
										success: true,
										msg: "登录成功",
										data: result[0]
									}
								})
							} else {
								res.send({
									data: {
										success: false,
										msg: "密码不正确"
									}
								})
							}
						})
					} else {
						res.send({
							data: {
								success: false,
								msg: "用户名或手机号不存在"
							}
						})
					}
				})
			});
			/* GET home page. 首页推荐模板数据*/
			router.get('/api/index/data', function(req, res, next) {
				res.send({
					"code": 0,
					"data": {
						topBar: [{
								id: 1,
								name: '推荐'
							},
							{
								id: 2,
								name: '运动户外'
							},
							{
								id: 3,
								name: '服饰内衣'
							},
							{
								id: 4,
								name: '鞋靴箱包'
							},
							{
								id: 5,
								name: '美妆个护'
							},
							{
								id: 6,
								name: '家居数码'
							},
							{
								id: 7,
								name: '食品母婴'
							}
						],
						data: [{
								type: "swiperList",
								data: [{
										imgUrl: '../../static/img/swiper1.jpg'
									},
									{
										imgUrl: '../../static/img/swiper2.jpg'
									},
									{
										imgUrl: '../../static/img/swiper3.jpg'
									}
								]
							},
							{
								type: "recommendList",
								data: [{
										bigUrl: "../../static/img/Children.jpg",
										data: [{
												imgUrl: "../../static/img/Children1.jpg"
											},
											{
												imgUrl: "../../static/img/Children2.jpg"
											},
											{
												imgUrl: "../../static/img/Children3.jpg"
											}
										]
									},
									{
										bigUrl: "../../static/img/Furnishing.jpg",
										data: [{
												imgUrl: "../../static/img/Furnishing1.jpg"
											},
											{
												imgUrl: "../../static/img/Furnishing2.jpg"
											},
											{
												imgUrl: "../../static/img/Furnishing3.jpg"
											}
										]
									}
								]
							},
							{
								type: "commodityList",
								data: [{
										id: 1,
										imgUrl: "../../static/img/commodity1.jpg",
										name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice: "299",
										oprice: "659",
										discount: "5.2"
									},
									{
										id: 2,
										imgUrl: "../../static/img/commodity2.jpg",
										name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice: "299",
										oprice: "659",
										discount: "5.2"
									},
									{
										id: 3,
										imgUrl: "../../static/img/commodity3.jpg",
										name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice: "299",
										oprice: "659",
										discount: "5.2"
									},
									{
										id: 4,
										imgUrl: "../../static/img/commodity4.jpg",
										name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice: "299",
										oprice: "659",
										discount: "5.2"
									}
								]
							}
						]
					}
				})
			});
			/* GET home page. 首页其他模板数据*/
			router.get('/api/index/2/data/1', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
							type: "bannerList",
							imgUrl: "../../static/img/banner1.jpg"
						},
						{
							type: "iconsList",
							data: [{
									imgUrl: "../../static/img/icons1.png",
									name: "运动户外"
								},
								{
									imgUrl: "../../static/img/icons2.png",
									name: "运动户外"
								},
								{
									imgUrl: "../../static/img/icons3.png",
									name: "运动户外"
								},
								{
									imgUrl: "../../static/img/icons4.png",
									name: "运动户外"
								},
								{
									imgUrl: "../../static/img/icons5.png",
									name: "运动户外"
								},
								{
									imgUrl: "../../static/img/icons6.png",
									name: "运动户外"
								},
								{
									imgUrl: "../../static/img/icons7.png",
									name: "运动户外"
								},
								{
									imgUrl: "../../static/img/icons8.png",
									name: "运动户外"
								}
							]
						},
						{
							type: "hotList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/hot1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/hot2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/hot3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						},
						{
							type: "shopList",
							data: [{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								},
								{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								}
							]
						},
						{
							type: "commodityList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/commodity1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/commodity2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/commodity3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 4,
									imgUrl: "../../static/img/commodity4.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						}
					]
				})
			});
			router.get('/api/index/3/data/1', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
							type: "bannerList",
							imgUrl: "../../static/img/banner1.jpg"
						},
						{
							type: "iconsList",
							data: [{
									imgUrl: "../../static/img/icons1.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons2.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons3.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons4.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons5.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons6.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons7.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons8.png",
									name: "服饰内衣"
								}
							]
						},
						{
							type: "hotList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/hot1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/hot2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/hot3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						},
						{
							type: "shopList",
							data: [{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								},
								{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								}
							]
						},
						{
							type: "commodityList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/commodity1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/commodity2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/commodity3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 4,
									imgUrl: "../../static/img/commodity4.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						}
					]
				})
			});
			router.get('/api/index/4/data/1', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
							type: "bannerList",
							imgUrl: "../../static/img/banner1.jpg"
						},
						{
							type: "iconsList",
							data: [{
									imgUrl: "../../static/img/icons1.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons2.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons3.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons4.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons5.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons6.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons7.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons8.png",
									name: "服饰内衣"
								}
							]
						},
						{
							type: "hotList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/hot1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/hot2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/hot3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						},
						{
							type: "shopList",
							data: [{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								},
								{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								}
							]
						},
						{
							type: "commodityList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/commodity1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/commodity2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/commodity3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 4,
									imgUrl: "../../static/img/commodity4.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						}
					]
				})
			});
			router.get('/api/index/5/data/1', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
							type: "bannerList",
							imgUrl: "../../static/img/banner1.jpg"
						},
						{
							type: "iconsList",
							data: [{
									imgUrl: "../../static/img/icons1.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons2.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons3.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons4.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons5.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons6.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons7.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons8.png",
									name: "服饰内衣"
								}
							]
						},
						{
							type: "hotList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/hot1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/hot2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/hot3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						},
						{
							type: "shopList",
							data: [{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								},
								{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								}
							]
						},
						{
							type: "commodityList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/commodity1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/commodity2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/commodity3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 4,
									imgUrl: "../../static/img/commodity4.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						}
					]
				})
			});
			router.get('/api/index/6/data/1', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
							type: "bannerList",
							imgUrl: "../../static/img/banner1.jpg"
						},
						{
							type: "iconsList",
							data: [{
									imgUrl: "../../static/img/icons1.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons2.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons3.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons4.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons5.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons6.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons7.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons8.png",
									name: "服饰内衣"
								}
							]
						},
						{
							type: "hotList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/hot1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/hot2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/hot3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						},
						{
							type: "shopList",
							data: [{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								},
								{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								}
							]
						},
						{
							type: "commodityList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/commodity1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/commodity2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/commodity3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 4,
									imgUrl: "../../static/img/commodity4.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						}
					]
				})
			});
			router.get('/api/index/7/data/1', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
							type: "bannerList",
							imgUrl: "../../static/img/banner1.jpg"
						},
						{
							type: "iconsList",
							data: [{
									imgUrl: "../../static/img/icons1.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons2.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons3.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons4.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons5.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons6.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons7.png",
									name: "服饰内衣"
								},
								{
									imgUrl: "../../static/img/icons8.png",
									name: "服饰内衣"
								}
							]
						},
						{
							type: "hotList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/hot1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/hot2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/hot3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						},
						{
							type: "shopList",
							data: [{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								},
								{
									bigUrl: "../../static/img/shop.jpg",
									data: [{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 1,
											imgUrl: "../../static/img/shop1.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 2,
											imgUrl: "../../static/img/shop2.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 3,
											imgUrl: "../../static/img/shop3.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										},
										{
											id: 4,
											imgUrl: "../../static/img/shop4.jpg",
											name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
											pprice: "299",
											oprice: "659",
											discount: "5.2"
										}
									]
								}
							]
						},
						{
							type: "commodityList",
							data: [{
									id: 1,
									imgUrl: "../../static/img/commodity1.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 2,
									imgUrl: "../../static/img/commodity2.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 3,
									imgUrl: "../../static/img/commodity3.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								},
								{
									id: 4,
									imgUrl: "../../static/img/commodity4.jpg",
									name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
									pprice: "299",
									oprice: "659",
									discount: "5.2"
								}
							]
						}
					]
				})
			});
			//首次第一次触底的数据
			router.get('/api/index/1/data/2', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
						type: "commodityList",
						data: [{
								id: 1,
								imgUrl: "../../static/img/commodity1.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 2,
								imgUrl: "../../static/img/commodity2.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 3,
								imgUrl: "../../static/img/commodity3.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 4,
								imgUrl: "../../static/img/commodity4.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							}
						]
					}]
				})
			})
			//运动户外第二次触底的数据
			router.get('/api/index/2/data/3', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
						type: "commodityList",
						data: [{
								id: 1,
								imgUrl: "../../static/img/commodity1.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 2,
								imgUrl: "../../static/img/commodity2.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 3,
								imgUrl: "../../static/img/commodity3.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 4,
								imgUrl: "../../static/img/commodity4.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							}
						]
					}]
				})
			})
			//运动户外第一次触底的数据
			router.get('/api/index/2/data/2', function(req, res, next) {
				res.json({
					code: "0",
					data: [{
						type: "commodityList",
						data: [{
								id: 1,
								imgUrl: "../../static/img/commodity1.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 2,
								imgUrl: "../../static/img/commodity2.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 3,
								imgUrl: "../../static/img/commodity3.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							},
							{
								id: 4,
								imgUrl: "../../static/img/commodity4.jpg",
								name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice: "299",
								oprice: "659",
								discount: "5.2"
							}
						]
					}]
				})
			})

			// 搜索页面接口数据
			router.get('/api/goods/search', function(req, res, next) {
				//desc降序     asc升序
				//获取对象的key
				let [goodsName, orderName] = Object.keys(req.query);
				//name参数的值
				let name = req.query.name;
				//orderName的key的值
				let order = req.query[orderName];

				connection.query("select * from goods_search where name like '%" + name + "%' order by " + orderName + " " +
					order +
					"",
					function(error, results, fields) {
						if (error) throw error;
						// console.log(results)
						res.send({
							code: "0",
							data: results
						})
					});
			})
			// 分类接口数据
			router.get('/api/goods/list', function(req, res, next) {
				res.json({
					code: 0,
					data: [{
							id: 1,
							name: "家居家纺",
							data: [{
									name: "家纺",
									list: [{
											id: 1,
											name: "毛巾/浴巾",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "枕头",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "枕头",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "生活用品",
									list: [{
											id: 1,
											name: "浴室用品",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "洗晒",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "洗晒",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
							]
						},
						{
							id: 2,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
							]
						},
						{
							id: 3,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 4,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 5,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 6,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 7,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 8,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 9,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 10,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 11,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 12,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},
						{
							id: 13,
							name: "女装",
							data: [{
									name: "裙装",
									list: [{
											id: 1,
											name: "半身裙",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "连衣裙",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								},
								{
									name: "上衣",
									list: [{
											id: 1,
											name: "T恤",
											imgUrl: "../../static/img/list1.jpg"
										},
										{
											id: 2,
											name: "衬衫",
											imgUrl: "../../static/img/list1.jpg"
										}
									]
								}
							]
						},

					]
				})
			});

			// 详情数据接口
			router.get('/api/goods/id', function(req, res, next) {
				let id = req.query.id;
				connection.query("select * from goods_search where id=" + id + "", function(error, results, fields) {
					if (error) throw error;
					res.send({
						code: "0",
						data: results
					})
				});
			});

			module.exports = router;
