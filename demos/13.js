const route = require('koa-route')
const Koa = require('koa')
const app = new Koa()

const redirect = ctx => {
    ctx.response.redirect('/')
}

const main = ctx => {
    ctx.response.body = 'main'
}

app.use(route.get('/redirect',redirect))
app.use(route.get('/',main))
app.listen(3000)

// 访问：http://127.0.0.1:3000/redirect