const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.response.body = 'hello koa'
}

app.use(main)
app.listen(3000)