const jsonServer = require('json-server')

const server = jsonServer.create()
const router = require('./router')

const db =require('./db')()
//中间件
server.use((req,res,next) => {
    const json = res.json.bind(res)
    res.success = (data) => {
        return json({
            code:200,
            msg:'成功',
            data
        })
    }
    res.fail = (msg,code=-1,data) => {
        return json({
            code,
            msg,
            data
        })
    }
    next()
})
router(server)
const jsonRouter =jsonServer.router(db)
server.use('/api',jsonRouter)
server.listen(7000,()=>{console.log('监听7000端口成功')}) 