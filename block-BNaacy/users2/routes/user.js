var express=require('express')
var router=express.Router();
var User=require('../models/user')


router.get('/',(req,res)=>{
    res.render('user')
})
router.get('/new',(req,res)=>{
    res.render('addUser')
})
router.post('/',(req,res)=>{
    //capture date 
    console.log(req.body)
    //save it to data base
    User.create(req.body,(err, userUpdated)=>{
        console.log(err,userUpdated)
    })
    //respose
})



module.exports=router;