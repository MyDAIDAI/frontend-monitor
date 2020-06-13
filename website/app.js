const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
const port = 3000;

app.use(serve(__dirname + '/client'))
app.listen(port, () => {
  console.log(`${port} is listening`)
})