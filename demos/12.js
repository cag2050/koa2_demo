const path = require('path')
const staticServe = require('koa-static')
const Koa = require('koa')
const app = new Koa()

const main = staticServe(path.join(__dirname))

app.use(main)
app.listen(3000)

// 访问：http://127.0.0.1:3000/12.js