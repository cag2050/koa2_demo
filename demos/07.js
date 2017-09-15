const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    console.log(` ${Date.now()} ${ ctx.request.method } ${ ctx.request.url } `)
    ctx.response.body = 'hello world'
}

app.use(main)
app.listen(3000)

// 在命令行窗口中打印，不是浏览器的console窗口