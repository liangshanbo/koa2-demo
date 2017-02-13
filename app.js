const Koa = require('koa');
const log = require('koa-logger'); 
var Router = require('koa-router');
var request = require('koa-request');
var bodyParser = require('koa-bodyparser');

var app = new Koa();
var router = new Router();
/*
app.use(async (ctx,next) => {
	await next();
	// console.log(ctx.request);
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>Hello</h1>';
});*/

router.get('/', async (ctx, next) => {
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>Index</h1><form action="/signin" method="post"><p>Name: <input name="name" value="koa"></p><p>Password: <input name="password" type="password" value="fsdfsdf"></p><p><input type="submit" value="Submit"></p></form>';
});

router.get('/:name', async (ctx, next) => {
	let name = this.params.name;
	this.type = 'text/html';
	this.body = `<h1>Hello ${name}</h1>`;
});

router.post('/signin', async (ctx, next) => {
	let res = await request({url:'http://api.bs.pro.gomeplus.com/v2/combo/item?userId=0&loginToken=&accessToken=&appVersion=1.2.1&device=3/1.0.0/wap/euuknin502f734nata2tfnh182&app=003/0140105083000000&net=4G&jsonp=&uniqueDeviceId=381283183411.1482832727442&sid=a1_p04&shopId=90877&itemId=2271929&kId=&addressNodeId=11011400&traceId=euuknin502f734nata2tfnh182162739796',headers:{ 'User-Agent':'request' }});
	console.log(res);
	ctx.response.body = JSON.stringify(res.body);
});

app.use(log());
app.use(bodyParser());
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3131);

console.log('app start');

