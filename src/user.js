let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let userSchema=new Schema({
    name:String,
    age:Number,
    admin:Boolean
});

let User=mongoose.model('student',userSchema);

module.exports=User;