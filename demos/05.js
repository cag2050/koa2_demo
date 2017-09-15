const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    if (ctx.request.path !== '/') {
        ctx.response.type = 'html'
        ctx.response.body = "<a href='/'>Index page</a>"
    } else {
        ctx.response.body = 'home'
    }
}

app.use(main)
app.listen(3000)

// 访问： http://127.0.0.1:3000/aaa