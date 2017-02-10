var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app.use(async (ctx,next) => {
	await next();
});

router.get('/', function (ctx, next) {
	this.type = 'text/html';
	this.body = '<h1>Hello Koa2</h1>';
});

router.get('/:name', function (ctx, next) {
	let name = this.params.name;
	this.type = 'text/html';
	this.body = `<h1>Hello ${name}</h1>`;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3131);

console.log('app start');

