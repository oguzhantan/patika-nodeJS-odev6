const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const port = 3000

// response

router.get('/',ctx =>{
    ctx.status = 200;
    ctx.body = '<h1>INDEX</h1>'
})

app.use(router.routes())

router.get("/hakkimda",ctx =>{
    ctx.status = 200;
    ctx.body = '<h1>HAKKIMDA</h1>'
})

router.get("/iletisim",ctx =>{
    ctx.status = 200;
    ctx.body = '<h1>İLETİŞİM</h1>'
})

app.listen(port,() =>{
    console.log(`${port} portunda sunucu başlatıldı.`)
})