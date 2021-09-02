var express=require('express')
var app=express()
var path=require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('index',{name:'vivek'})
})
app.get('/about',(req,res)=>{
     res.render('about',{about:'XYZ School EST:-2000'})
    
})



app.listen(3000,()=>{
    console.log('server is litening on port 3k')
})