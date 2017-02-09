const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
// const router = require('koa-router')();

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello Koa2</h1>';
});

// add url-route:
/*router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
	console.log(ctx);
    // ctx.response.body = '<h1>Index</h1>';
});*/

// add router middleware:
// app.use(router.routes());

// 在端口3131监听:
app.listen(3131);

console.log('app start');