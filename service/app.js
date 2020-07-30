const Koa = require('koa');
const app = new Koa();
app.use(async ntx=>{
  ntx.body='hello world'
})
app.listen(3030,()=>{
  console.log('server is running ...')
})
