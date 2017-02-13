const Koa = require('koa');
const koa = new require('koa-router')
const json = require('koa-json')
const logger = require('koa-logger'); // 引入各种依赖
const bodyParser = require('koa-bodyparser');

const app = new Koa(); 

app.use(bodyParser());
app.use(json());
app.use(logger());

app.use(function* (next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms); // 显示执行的时间
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

module.exports = app;

