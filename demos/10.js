const fsPromised = require('fs.promised')
const Koa = require('koa')
const app = new Koa()

const main = async function(ctx) {
    ctx.response.type = 'html'
    ctx.response.body = await fsPromised.readFile('./template.html', 'utf-8')
}

app.use(main)
app.listen(3000)