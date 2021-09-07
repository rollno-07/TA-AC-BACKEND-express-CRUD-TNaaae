var express=require('express')
var router=express.Router();
var User=require('../models/user')


router.get('/',(req,res)=>{
    User.find({},(err,users,next)=>{
        console.log(err,users);
        if(err) return next(err);
        res.render('user',{users:users})
    })
    
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
    res.redirect('/user')
})

router.get('/:id',(req,res,next)=>{
    var id=req.params.id;
    console.log(id)
    User.findById(id,(err,user,next)=>{
        if(err) return next(err)
        res.render('usrdetail',{user:user})
    })
})



module.exports=router;