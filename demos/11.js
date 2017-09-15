const compose = require('koa-compose')
const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.response.body = 'hello world'
}

const logger = (ctx, next) => {
    console.log(` ${Date.now()} ${ ctx.request.method } ${ ctx.request.url } `)
    next()
}

const middleWares = compose([logger, main])
app.use(middleWares)
app.listen(3000)

// 在命令行窗口中打印，不是浏览器的console窗口
// 多个中间件是栈结构执行，即先进后出