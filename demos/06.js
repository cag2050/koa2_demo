const route = require('koa-route')
const Koa = require('koa')
const app = new Koa()

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = "<a href='/'>Index page</a>"
}

const main = ctx => {
    ctx.response.body = 'main'
}

app.use(route.get('/about',about))
app.use(route.get('/',main))
app.listen(3000)

// 访问：http://127.0.0.1:3000/about