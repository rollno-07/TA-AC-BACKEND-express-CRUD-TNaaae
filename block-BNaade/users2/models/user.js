var mongoose=require('mongoose')
var Schema=mongoose.Schema

var userschema= new Schema({
    name:{type: String,required:true},
    email:{type:String,$in:/@/},
    age:{type:Number,required:true},
    
    
    mobile:{type:String,max:10},
    
    password:{type:String,min:5,max:20}
},{timestamps:true})

var User=mongoose.model('User',userschema);
module.exports=User