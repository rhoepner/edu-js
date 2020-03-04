const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello from the KOA Web Server!';
});

app.listen(8080);