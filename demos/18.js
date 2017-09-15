const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.throw(500)
}

const handler = async (ctx, next) => {
    try {
        await next()
    } catch(err) {
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.body = {
            message: err.message
        }
        ctx.app.emit('error', err, ctx)
    }
}

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

app.use(handler)
app.use(main)
app.listen(3000)

