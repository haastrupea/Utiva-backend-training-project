const fs = require('fs').promises
const http = require('http')

 async function readFile(file) {
    let me = await fs.readFile(file)
    return me.toString('utf-8')
}

function createServer(port, callback) {
    console.log("server runing on port", port)
    return http.createServer(callback).listen(port)
}

module.exports = {
    readFile,
    createServer
}