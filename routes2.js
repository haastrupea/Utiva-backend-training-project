const express = require('express')
const appRoutes = express.Router()

appRoutes.get('/users',(req,res)=> {
    console.log(req.headers,"get request to /users")
    console.log(req.body,"get request to /users")
    res.status(200).send({success: true, message: "Users Profiles fetched successfully"})
})

appRoutes.get('/',(req,res)=> {
    res.status(200).send({index: "Welcome to our api", documentation: 'link to the APi Doc', version: 2.0})
})

module.exports = appRoutes