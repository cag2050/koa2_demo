const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>hello koa</data>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = { data: 'hello koa' }
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>hello koa</p>'
    } else {
        ctx.response.type = 'text'
        ctx.response.body = 'hello koa!'
    }
}

app.use(main)
app.listen(3000)