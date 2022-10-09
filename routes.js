const express = require('express');
const { User } = require('./dbModel');
const appRoutes = express.Router()

appRoutes.post('/user/create', async (req,res)=> {
// get user input
const newUserProfile = req.body;
 try {
    const newProfile = await User.create(newUserProfile)

     return res.status(201).send({
        success: true,
        message: "User profile created succesfully",
        data: newProfile
     })
 } catch (e) {
    console.log(e, "error")
    return res.status(400).send({
        success: false,
        message: "failed to create user profile"
    })
 }
})

appRoutes.post('/user/update/:userId', (req, res)=> {
  
})

appRoutes.get('/user/:userId', (req,res)=> {

})

appRoutes.get('/user', (req,res)=> {

})

appRoutes.delete('/user/delete/:userId', (req, res) =>{

})



module.exports = appRoutes