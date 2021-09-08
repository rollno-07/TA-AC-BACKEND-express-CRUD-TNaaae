var express=require('express')
var mongoose=require('mongoose')
var path=require('path')
var indexrouter=require('./routes/index')
var userrouter=require('./routes/user')
var app=express();



//db connection
mongoose.connect('mongodb://localhost/users',(err)=>{
    console.log(err ? err: "Connected to User DB")
})
//middleware for form data
app.use(express.urlencoded({extended:false}))

//middleware for static file like stylesheet,image,scripts
app.use(express.static(path.join(__dirname,'/public')))


//setup view engine
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//routing middleware
app.use('/',indexrouter);
app.use('/user',userrouter);

//error handle middleware
//404
app.use((req,res,next)=>{
    res.send('page not found')
})
app.use((err,req,res,next)=>{
    res.send(err)
})


//assigning port for listening
app.listen(3000,()=>{
    console.log('Server is listening on post 3k')
})


