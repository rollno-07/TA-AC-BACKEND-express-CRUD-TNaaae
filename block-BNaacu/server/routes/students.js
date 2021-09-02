



var express=require('express')
var router=express.Router();
var app=express()
var path=require('path');


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))

router.get('/new',(req,res)=>{
    res.send('Student Form')
})

router.post('/',(req,res)=>{

})
router.get('/studentdetails',(req,res)=>{
    res.render('studentDetails',{student: { name: "rahul", email: "rahul@altcampus.io" }})
})

router.get('/',(req,res)=>{
    res.render('students',{ list: ["ankit", "suraj", "prashant", "ravi"] })
})


module.exports=router;