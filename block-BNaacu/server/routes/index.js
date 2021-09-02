var express=require('express')
var router=express.Router();
var app=express();
var path=require('path');


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))

router.get('/new',(req,res)=>{
    res.render('index',{name:'Index'})
})

module.exports=router;