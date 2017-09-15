const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.response.body = 'hello world'
}

const one = (ctx, next) => {
    console.log('>>one')
    next()
    console.log('<<one')
}

const two = (ctx, next) => {
    console.log('>>two')
    next()
    console.log('<<two')
}
const three = (ctx, next) => {
    console.log('>>three')
    next()
    console.log('<<three')
}

app.use(one)
app.use(two)
app.use(three)
app.use(main)
app.listen(3000)

// 在命令行窗口中打印，不是浏览器的console窗口
// 多个中间件是栈结构执行，即先进后出