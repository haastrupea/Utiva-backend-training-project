const express = require('express')
const server = express()
const routes = require('./routes')
const routesV2 = require('./routes2')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use((req, _, next)=>{
    console.log("Method:", req.method,"Path:", req.path,"Body:", req.body)
    next()
})
server.use('/v1', routes)
server.use('/v2', routesV2)

server.listen(port, () => {
    console.log("server listening on port", port)
})