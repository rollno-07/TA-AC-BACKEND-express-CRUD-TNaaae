var express=require('express');
var app=express();
var mongoose=require('mongoose');
var path=require('path');

mongoose.connect('mongodb://localhost/students',(err)=>{
    console.log(err?err:'connected to students db')
});

app.use(express.json());


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))


app.use('/',require('./routes/index'))
app.use('/students',require('./routes/students'))


app.use((req,res,err)=>{
    res.send('Page Not Found')
})

app.listen(3000,()=>{
    console.log('server is listening on port 3k')
})